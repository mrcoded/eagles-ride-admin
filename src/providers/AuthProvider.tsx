import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AuthContext from "@/context/AuthContext";
import { AuthContextProps } from "@/context/types";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken || null);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Load token from localStorage on mount
    const storedToken = localStorage.getItem("token");
    if (storedToken && token !== storedToken) {
      setToken(storedToken);
    }
  }, [token]);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    toast.success("Logout Success...");
    localStorage.removeItem("token");
    setToken(null);
  };

  const value: AuthContextProps = {
    token,
    isLoggedIn: !!token,
    login,
    logout,
    loginData,
    setLoginData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
