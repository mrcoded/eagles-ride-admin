import { BookingsDataProps } from "@/types/bookings";
import { DriversDataProps } from "@/types/drivers";

export interface AuthContextProps {
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
  loginData: { email: string; password: string; role: string };
  setLoginData: React.Dispatch<
    React.SetStateAction<{ email: string; password: string; role: string }>
  >;
}

export interface GlobalContextProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shift: "morning" | "afternoon" | null;
  setShift: React.Dispatch<
    React.SetStateAction<"morning" | "afternoon" | null>
  >;
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
  driverId: string | undefined;
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
