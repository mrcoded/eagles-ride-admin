import { SelectedBookedRideProps } from "@/types/bookings";

export const SELECTED_RIDE = (
  ride?: SelectedBookedRideProps,
  morningDriver?: string,
  afternoonDriver?: string
) => {
  return [
    {
      label_from: "Morning Pick Up",
      location_from: ride?.morning_from,
      address_from: ride?.morning_from_address,
      label_to: "Morning Drop Off",
      location_to: ride?.morning_to,
      address_to: ride?.morning_to_address,
      time: ride?.morning_time,
      driver_from: afternoonDriver,
    },
    {
      label_from: "Afternoon Pick Up",
      location_from: ride?.afternoon_from,
      address_from: ride?.afternoon_from_address,
      label_to: "Afternoon Drop Off",
      location_to: ride?.afternoon_to,
      address_to: ride?.afternoon_to_address,
      time: ride?.afternoon_time,
      driver_to: morningDriver,
    },
  ];
};
