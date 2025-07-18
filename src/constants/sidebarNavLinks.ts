import {
  Car,
  DollarSign,
  LayoutDashboard,
  NotebookPenIcon,
  Users,
} from "lucide-react";

export const navigationItems = [
  {
    path: "/",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    path: "/units",
    icon: Car,
    label: "Drivers",
  },
  {
    path: "/ride-bookings",
    icon: NotebookPenIcon,
    label: "Ride Bookings",
  },
  {
    path: "/payments",
    icon: DollarSign,
    label: "Payments",
  },
  {
    path: "/manage-users",
    icon: Users,
    label: "Manage Users",
  },
];
