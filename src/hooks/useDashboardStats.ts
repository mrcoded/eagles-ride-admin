import { useQuery } from "@tanstack/react-query";

import { UserProps } from "@/types/index";
import { DriversDataProps } from "@/types/drivers";
import { BookingsDataProps } from "@/types/bookings";

import { LargeCardData, SmallCardData } from "@/utils/dashboardCardData";

export const useDashboardStats = () => {
  //Get all rides
  const { data: { rides } = { rides: [] } } = useQuery<{
    rides: BookingsDataProps["rides"][];
  }>({
    queryKey: ["book/all-rides"],
  });

  //Get all drivers
  const { data: driversData = [] } = useQuery<DriversDataProps[]>({
    queryKey: ["drivers"],
  });

  //Get all users
  const { data: userData = [] } = useQuery<UserProps[]>({
    queryKey: ["users"],
  });

  //Calculate stats
  const stats = {
    ongoingRides:
      rides?.filter((item) => item.status === "ongoing").length ?? 0,
    bookedRides: rides?.filter((item) => item.status === "booked").length ?? 0,
    assignedRides: rides?.filter((i) => i.status === "assigned").length ?? 0,
    approvedDrivers:
      driversData?.filter(
        (item: { status: string }) => item.status === "approved"
      ).length ?? 0,
    assignedDrivers:
      driversData?.filter(
        (item: { status: string }) => item.status === "assigned"
      ).length ?? 0,
    awaitingApproval:
      driversData?.filter(
        (item: { status: string }) => item.status === "not approved"
      ).length ?? 0,
    totalRides: rides?.length ?? 0,
    totalDrivers: driversData?.length ?? 0,
    totalUsers: userData?.length ?? 0,
  };

  return {
    largeCardData: LargeCardData(stats),
    smallCardData: SmallCardData(stats),
  };
};
