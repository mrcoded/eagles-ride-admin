import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { AuthContextProps } from "@/types/context";
import AuthContext from "@/context/AuthContext";
import { verifyTokenExpiration } from "@/utils/verifyToken";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(storedToken || null);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "admin",
  });

  useEffect(() => {
    // Load token from localStorage on mount
    const storedToken = localStorage.getItem("token");
    if (storedToken && token !== storedToken) {
      setToken(storedToken);
    }

    if (token) {
      //check if token is expired
      const isTokenValid = verifyTokenExpiration(token);
      setIsLoggedIn(isTokenValid);
      setIsLoading(false);
    }

    if (!token) {
      setIsLoading(false);
      setIsLoggedIn(false);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [token, navigate]);

  //login handler
  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  //logout handler
  const logout = () => {
    toast.success("Logout Success...", { duration: 1000 });
    localStorage.removeItem("token");
    setTimeout(() => {
      setToken(null);
    }, 2000);
  };

  const value: AuthContextProps = {
    token,
    isLoading,
    isLoggedIn,
    login,
    logout,
    loginData,
    setLoginData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
