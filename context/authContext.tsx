"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface AuthState {
  token: string;
  authenticated: boolean;
}

interface AuthContextProps {
  username: string;
  authState: AuthState;
  setAuthState: (authState: AuthState) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { push } = useRouter();
  const { toast } = useToast();
  const [username, setUsername] = useState<string>("");
  const [authState, setAuthState] = useState<AuthState>({
    token: "",
    authenticated: false,
  });

  const logout = useCallback(() => {
    setAuthState({ token: "", authenticated: false });
    setUsername("");
    toast({
      title: "Logout",
      description: "Logged out successfully",
    });
    push("/");

    // Clear axios headers
    api.interceptors.request.eject(
      // @ts-ignore
      api.defaults.headers.common["Authorization"],
    );
    api.defaults.headers.common["Authorization"] = null;

    // Clear local storage
    localStorage.removeItem("token");
  }, [toast, push]);

  // after 1 hour, the token will expire and the user will be logged out
  useEffect(() => {
    const interval = setInterval(() => {
      if (authState.authenticated) {
        logout();
      }
    }, 3600000);
    return () => clearInterval(interval);
  }, [authState.authenticated, logout]);

  useEffect(() => {
    const loadToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        api.defaults.headers.common["Authorization"] = "Bearer " + token;
        try {
          const res = await api.get("/users/me");
          setUsername(res.data.username);
          setAuthState({ token, authenticated: true });
        } catch (err) {
          logout();
          console.error(err);
        }
      }
    };
    loadToken();
  }, [logout]);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const token = res.data.accessToken;

      api.defaults.headers.common["Authorization"] = "Bearer " + token;

      setAuthState({ token, authenticated: true });
      localStorage.setItem("token", token);
      setUsername(res.data.username);
      toast({
        title: "Login",
        description: "Login Successful",
      });
      toast({
        variant: "default",
        title: "Login Successful 🎉",
        description: "Welcome back! Redirecting to home page...",
      });
      push("/");
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Login",
        description: err.response?.data?.message || "An error occurred",
        variant: "destructive",
      });
    }
  };

  const value = {
    username,
    login,
    authState,
    setAuthState,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
