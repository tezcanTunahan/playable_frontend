"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

const AuthContext = createContext({
  username: "",
  authState: {
    token: "",
    authenticated: false,
  },
  setAuthState: (authState: any) => {},
  login: (email: string, password: string) => {},
  logout: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const { push } = useRouter();

  const [username, setUsername] = useState("");
  const [authState, setAuthState] = useState({
    token: "",
    authenticated: false,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        // @ts-ignore
        api.interceptors.request.use(async (config) => {
          config.headers["authorization"] = "Bearer " + token;
          return config;
        });
        api
          .get("/users/me")
          .then((res) => {
            setUsername(res.data.username);
          })
          .catch((err) => {
            logout();
            console.error(err);
          });
        setAuthState({ token, authenticated: true });
      }
    };
    loadToken();
  }, [authState.authenticated]);

  const login = (email: string, password: string) => {
    api
      .post("/auth/login", { email, password })
      .then((res) => {
        const token = res.data.accessToken;
        localStorage.setItem("token", token);
        setAuthState({ token, authenticated: true });
        push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthState({ token: "", authenticated: false });
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
