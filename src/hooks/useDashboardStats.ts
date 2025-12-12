import { DriverService } from "@/services/driverService";
import { BookingService } from "@/services/bookingService";

import { LargeCardData, SmallCardData } from "@/utils/dashboardCardData";
import { UserService } from "@/services/userService";

export const useDashboardStats = () => {
  //Get all rides
  const { rides } = BookingService();

  //Get all drivers
  const { driversData } = DriverService();

  //Get all users
  const { usersData } = UserService();

  //Calculate stats
  const stats = {
    ongoingRides:
      rides?.filter((item) => item.status === "ongoing").length ?? 0,
    bookedRides: rides?.filter((item) => item.status === "booked").length ?? 0,
    assignedRides: rides?.filter((i) => i.status === "assigned").length ?? 0,
    approvedDrivers:
      driversData?.filter(
        (item: { isDriverApproved?: boolean }) => item.isDriverApproved === true
      ).length ?? 0,
    assignedDrivers: rides?.reduce((count, ride) => {
      const acceptedDrivers = ride.drivers?.filter(
        (driver) => driver.assignmentStatus === "accepted"
      );
      return count + (acceptedDrivers?.length ?? 0);
    }, 0),
    awaitingApproval:
      driversData?.filter(
        (item: { isDriverApproved?: boolean }) =>
          item.isDriverApproved === false
      ).length ?? 0,
    totalRides: rides?.length ?? 0,
    totalDrivers: driversData?.length ?? 0,
    totalUsers: usersData?.length ?? 0,
  };

  return {
    largeCardData: LargeCardData(stats),
    smallCardData: SmallCardData(stats),
  };
};
