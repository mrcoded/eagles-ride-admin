import React, { useEffect, useState } from "react";

import AuthContext from "@/context/AuthContext";
import { AuthContextType } from "@/types/context";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken || null);

  const [formData, setFormData] = useState({
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
    localStorage.removeItem("token");
    setToken(null);
  };

  const value: AuthContextType = {
    token,
    isLoggedIn: !!token,
    login,
    logout,
    formData,
    setFormData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
