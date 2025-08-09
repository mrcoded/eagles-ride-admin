import { useQuery } from "@tanstack/react-query";

import { BookingsDataProps, BookingsTableProps } from "@/types";
import { LargeCardData, SmallCardData } from "@/utils/dashboardCardData";

export const useDashboardStats = () => {
  const { data: { rides } = { rides: [] } } = useQuery<{
    rides: BookingsDataProps["rides"][];
  }>({
    queryKey: ["book/all-rides"],
  });

  const { data: driversData = [] } = useQuery<BookingsTableProps["drivers"]>({
    queryKey: ["drivers"],
  });

  const stats = {
    ongoingRides: rides?.filter((item) => item.status === "ongoing").length,
    bookedRides: rides?.filter((item) => item.status === "booked").length,
    assignedRides: rides?.filter((i) => i.status === "assigned").length,
    approvedDrivers: driversData?.filter(
      (item: { status: string }) => item.status === "approved"
    ).length,
    assignedDrivers: driversData?.filter(
      (item: { status: string }) => item.status === "assigned"
    ).length,
    awaitingApproval: driversData?.filter(
      (item: { status: string }) => item.status === "not approved"
    ).length,
    totalRides: rides?.length,
    totalDrivers: driversData?.length,
    totalUsers: 0,
  };

  return {
    largeCardData: LargeCardData(stats),
    smallCardData: SmallCardData(stats),
  };
};
