'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext({
  user: {
    username: '',
    email: '',
    id: '',
  },
  authState: {
    token: '',
    authenticated: false,
  },
  setAuthState: (authState: any) => {},
  setUser: (user: any) => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState({
    username: '',
    email: '',
    id: '',
  });
  const [authState, setAuthState] = useState({
    token: '',
    authenticated: false,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        7;
        axios
          .get(process.env.NEXT_PUBLIC_API_URL + '/user/me')
          .then((res) => {
            setUser(res.data.user);
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

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({ token: '', authenticated: false });
  };

  const value = {
    user,
    setUser,
    authState,
    setAuthState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
