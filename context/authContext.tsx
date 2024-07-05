"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useLayoutEffect,
} from "react";
import api from "@/lib/api";
import { toast } from "@/components/ui/use-toast";

type AuthContextType = {
  token?: string | null;
  login: (email: string, password: string) => void;
};

const AuthContext = createContext<AuthContextType>({
  token: "",
  login: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/auth/me");
        setToken(res.data.access_token);
      } catch (error: any) {
        setToken(null);
        console.error(error);
      }
    };
    fetchMe();
  }, []);

  useLayoutEffect(() => {
    // @ts-ignore
    const authInterceptor = api.interceptors.request.use((config) => {
      config.headers.authorization = token
        ? `Bearer ${token}`
        : config.headers.authorization;
      return config;
    });

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });
      if (res.status === 200) {
        toast({
          title: "Login successful! 🎉",
          description:
            "You have successfully logged in. Redirecting you to the dashboard.",
        });
      }
      setToken(res.data.accessToken);
    } catch (error: any) {
      console.error(error);
      toast({
        title: "An error occurred.",
        description: error.response?.data.message,
      });
    }
  };

  const value = {
    token,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
