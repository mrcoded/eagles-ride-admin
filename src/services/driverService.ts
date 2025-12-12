import { useQuery } from "@tanstack/react-query";

import { useApiRequest } from "@/hooks/useApiRequest";

import { DriversDataProps } from "@/types/drivers";

export const DriverService = (driverId?: string) => {
  const { makeAPIRequest } = useApiRequest();

  const {
    data: driversData = [],
    isError: driversError,
    isPending: driversPending,
    isFetching: driversFetching,
  } = useQuery<DriversDataProps[]>({
    queryKey: ["drivers"],
    queryFn: () =>
      makeAPIRequest({
        endpoint: "drivers",
        method: "GET",
      }),
    staleTime: 1000 * 60 * 5,
  });

  const {
    data: { driver } = {},
    isFetching: driverFetching,
    isPending: driverPending,
  } = useQuery<{
    driver: { fullname: string };
  }>({
    queryKey: [`drivers/${driverId}`],
    queryFn: () =>
      makeAPIRequest({
        endpoint: `drivers/${driverId}`,
        method: "GET",
      }),
    enabled: !!driverId,
  });

  return {
    driversData,
    driversError,
    driversPending,
    driversFetching,
    driver,
    driverFetching,
    driverPending,
  };
};
