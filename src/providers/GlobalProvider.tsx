import React, { useState } from "react";
import GlobalContext from "@/context/GlobalContext";

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [driverId, setDriverId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>("");
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery,
        isLoading,
        setIsLoading,
        isModalOpen,
        setIsModalOpen,
        selectedUserId,
        setSelectedUserId,
        selectedItemId,
        setSelectedItemId,
        driverId,
        setDriverId,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
