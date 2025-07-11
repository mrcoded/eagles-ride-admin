import React, { useState } from "react";
import GlobalContext from "@/context/GlobalContext";

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [driverId, setDriverId] = useState("");

  return (
    <GlobalContext.Provider
      value={{ driverId, setDriverId, isOpen, setIsOpen }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
