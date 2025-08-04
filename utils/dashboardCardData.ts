import { Car, User2, Users } from "lucide-react";
import { DashboardCardProps } from "@/types/dashboard";

const LargeCardData = ({
  ongoingRides,
  bookedRides,
  assignedRides,
  approvedDrivers,
  assignedDrivers,
  awaitingApproval,
}: DashboardCardProps["largeCard"]) => {
  return [
    {
      title: "Ride Bookings",
      description: "Overview of all ride bookings status",
      data: [
        {
          label: "Ongoing Rides",
          value: ongoingRides,
        },
        {
          label: "Booked Rides",
          value: bookedRides,
        },
        {
          label: "Assigned Rides",
          value: assignedRides,
        },
      ],
    },

    {
      title: "Drivers Stats",
      description: "Overview of all drivers activities",
      data: [
        {
          label: "Approved Drivers",
          value: approvedDrivers,
        },
        {
          label: "Assigned Drivers",
          value: assignedDrivers,
        },
        {
          label: "Awaiting Approval",
          value: awaitingApproval,
        },
      ],
    },
  ];
};

const SmallCardData = ({
  totalRides,
  totalDrivers,
  totalUsers,
}: DashboardCardProps["smallCard"]) => {
  return [
    {
      label: "Total Rides",
      value: totalRides,
      icon: Car,
    },
    {
      label: "Total Drivers",
      value: totalDrivers,
      icon: User2,
    },
    {
      label: "Total Users",
      value: totalUsers,
      icon: Users,
    },
    {
      label: "Total Users",
      value: totalUsers,
      icon: Users,
    },
  ];
};

export { LargeCardData, SmallCardData };
