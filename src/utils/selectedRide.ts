import { BookingsDataProps, SelectedBookedRideProps } from "@/types/bookings";

// Helper to check if a driver covers a specific shift
const getDriverName = (
  drivers: BookingsDataProps["rides"]["drivers"] | undefined,
  shiftType: "morning" | "afternoon"
) => {
  if (!drivers) return null;

  const assigned = drivers.find(
    (d) =>
      d.assignmentStatus === "accepted" &&
      (d.shift === shiftType || d.shift === null)
  );

  return assigned?.fullname || null;
};

// Function to get ride shifts with details
export const getRideShifts = (ride?: SelectedBookedRideProps) => {
  return [
    {
      id: "morning",
      label: "Morning Shift",
      time: ride?.morning_time,
      pickup: {
        location: ride?.morning_from,
        address: ride?.morning_from_address,
      },
      dropoff: {
        location: ride?.morning_to,
        address: ride?.morning_to_address,
      },
      driverName: getDriverName(
        ride?.drivers as BookingsDataProps["rides"]["drivers"] | undefined,
        "morning"
      ),
    },
    {
      id: "afternoon",
      label: "Afternoon Shift",
      time: ride?.afternoon_time,
      pickup: {
        location: ride?.afternoon_from,
        address: ride?.afternoon_from_address,
      },
      dropoff: {
        location: ride?.afternoon_to,
        address: ride?.afternoon_to_address,
      },
      driverName: getDriverName(
        ride?.drivers as BookingsDataProps["rides"]["drivers"] | undefined,
        "afternoon"
      ),
    },
  ];
};
