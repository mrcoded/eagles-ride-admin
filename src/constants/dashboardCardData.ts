import { Car, User2, Users } from "lucide-react";

const LARGECARD_DATA = [
  {
    title: "Ride Bookings",
    description: "Overview of all ride bookings status",
    data: [
      {
        label: "Ongoing Rides",
        value: "12",
      },
      {
        label: "Booked Rides",
        value: "12",
      },
      {
        label: "Assigned Rides",
        value: "12",
      },
    ],
  },

  {
    title: "Drivers Stats",
    description: "Overview of all drivers activities",
    data: [
      {
        label: "Approved Drivers",
        value: "12",
      },
      {
        label: "Assigned Drivers",
        value: "12",
      },
      {
        label: "Awaiting Approval",
        value: "12",
      },
    ],
  },
];

const SMALLCARD_DATA = [
  {
    label: "Total Rides",
    value: "12",
    icon: Car,
  },
  {
    label: "Total Drivers",
    value: "12",
    icon: User2,
  },
  {
    label: "Total Users",
    value: "12",
    icon: Users,
  },
  {
    label: "Total Users",
    value: "12",
    icon: Users,
  },
];

export { LARGECARD_DATA, SMALLCARD_DATA };
