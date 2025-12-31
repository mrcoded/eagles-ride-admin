export interface BookingsDataProps {
  user: UserProps;
  rides: {
    _id: string;
    fullname: string;
    email: string;
    status: string;
    image: string;
    user: {
      address: string;
      _id: string;
      image: string;
      email: string;
      phone_number: string;
      fullname: string;
    };
    drivers: {
      id: string;
      fullname: string;
      shift: string;
      assignmentStatus: string;
    }[];
    child?: {
      _id: string;
      fullname: string;
      age: number;
      school: string;
      grade: string;
      image: string;
    };
    isDriverApproved?: boolean;
    trip_type: string;
    morning_from?: string;
    morning_to?: string;
    morning_time?: string;
    morning_to_address?: string;
    morning_from_address?: string;
    afternoon_from?: string;
    afternoon_to?: string;
    afternoon_time?: string;
    afternoon_to_address?: string;
    afternoon_from_address?: string;
    start_date?: string;
    drop_off_time: string;
    drop_off_location: string;
    pick_up_time: string;
    pick_up_location: string;
    address?: string;
  };
}

export interface SelectedBookedRideProps {
  morning_from?: string;
  morning_to?: string;
  morning_time?: string;
  morning_to_address?: string;
  morning_from_address?: string;
  afternoon_from?: string;
  afternoon_to?: string;
  afternoon_time?: string;
  afternoon_to_address?: string;
  afternoon_from_address?: string;
  start_date?: string;
  drop_off_time?: string;
  drop_off_location?: string;
  pick_up_time?: string;
  pick_up_location?: string;
  pickup_days?: string[];
  address?: string;
  drivers?: string;
  schedule_type?: string;
}

export interface UserProps {
  address?: string | undefined;
  _id: string;
  image: string;
  address: string;
  email: string;
  phone_number: string;
  fullname: string;
  child?: {
    _id: string;
    fullname: string;
    age: number;
    school: string;
    grade: string;
    image: string;
  };
}

export interface ShiftSelectorProps {
  shift: "morning" | "afternoon" | null;
  setShift: React.Dispatch<
    React.SetStateAction<"morning" | "afternoon" | null>
  >;
  setItemId?: React.Dispatch<React.SetStateAction<string | null>>;
}
