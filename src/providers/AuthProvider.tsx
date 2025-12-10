import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { AuthContextProps } from "@/context/types";
import AuthContext from "@/context/AuthContext";
import { verifyTokenExpiration } from "@/utils/verifyToken";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  const [token, setToken] = useState(storedToken || null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    }

    if (!token) {
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
    toast.success("Logout Success...");
    localStorage.removeItem("token");
    setTimeout(() => {
      setToken(null);
    }, 2000);
  };

  const value: AuthContextProps = {
    token,
    isLoggedIn,
    login,
    logout,
    loginData,
    setLoginData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
