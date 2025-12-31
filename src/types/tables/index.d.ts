import { DriversDataProps } from "@/types/drivers";
import { BookingsDataProps, UserProps } from "@/types/bookings";

// Union of table types
export type TableType = "booking" | "driver";

export type TableDataMap = {
  booking: BookingsDataProps["rides"][];
  driver: DriversDataProps[];
};

export interface DataTableProps<T extends TableType> {
  type: T;
  data: TableDataMap[T];
  isLoading: boolean;
  dataError: boolean;
}

export interface TableRowItemData {
  _id: string;
  user: UserProps;
  email: string;
  status: string;
  fullname: string;
  phone_number?: string;
  residential_address?: string;
  isDriverApproved?: boolean;
  trip_type: string;
  ride_type: string;
  pick_up_location: string;
  drop_off_location: string;
}

export interface TableRowItemProps<T extends TableType> {
  item: TableDataMap[T][number];
  type: T;
  selectedItemId: string | null;
}
