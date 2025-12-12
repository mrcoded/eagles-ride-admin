import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import GlobalContext from "@/context/GlobalContext";
import { DriversDataProps } from "@/types/drivers";
import { BookingsDataProps } from "@/types/bookings";

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [driverId, setDriverId] = useState<string | undefined>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [toolbarTitle, setToolbarTitle] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDriverData, setSelectedDriverData] = useState<
    DriversDataProps | undefined
  >();
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>("");
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null
  );
  const [selectedRideData, setSelectedRideData] = useState<
    BookingsDataProps["rides"] | undefined
  >();

  // Reset modal whenever route changes
  useEffect(() => {
    setIsModalOpen(false);
  }, [location.pathname, toolbarTitle]);

  return (
    <GlobalContext.Provider
      value={{
        query,
        setQuery,
        driverId,
        setDriverId,
        toolbarTitle,
        setToolbarTitle,
        isOpen,
        setIsOpen,
        isLoading,
        setIsLoading,
        isModalOpen,
        setIsModalOpen,
        sidebarOpen,
        setSidebarOpen,
        selectedUserId,
        setSelectedUserId,
        selectedItemId,
        selectedBookingId,
        setSelectedBookingId,
        setSelectedItemId,
        selectedRideData,
        setSelectedRideData,
        selectedDriverData,
        setSelectedDriverData,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
