export interface DashboardCardProps {
  largeCard: {
    ongoingRides: number;
    bookedRides: number;
    assignedRides: number;
    approvedDrivers: number;
    assignedDrivers: number;
    awaitingApproval: number;
  };
  smallCard: {
    totalRides: number;
    totalDrivers: number;
    totalUsers: number;
  };
}
