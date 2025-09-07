import { BookingsDataProps } from "../../components/bookings/types";
import { DriversDataProps } from "../../components/drivers/types";

export interface AuthContextProps {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  loginData: { email: string; password: string };
  setLoginData: React.Dispatch<
    React.SetStateAction<{ email: string; password: string }>
  >;
}

export interface GlobalContextProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUserId: string | undefined;
  setSelectedUserId: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedItemId: string | null;
  setSelectedItemId: React.Dispatch<React.SetStateAction<string | null>>;
  selectedBookingId: string | null;
  setSelectedBookingId: React.Dispatch<React.SetStateAction<string | null>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toolbarTitle: string;
  setToolbarTitle: React.Dispatch<React.SetStateAction<string>>;
  driverId: string;
  setDriverId: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedRideData: BookingsDataProps["rides"] | undefined;
  setSelectedRideData: React.Dispatch<
    React.SetStateAction<BookingsDataProps["rides"] | undefined>
  >;
  selectedDriverData: DriversDataProps | undefined;
  setSelectedDriverData: React.Dispatch<
    React.SetStateAction<DriversDataProps | undefined>
  >;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
