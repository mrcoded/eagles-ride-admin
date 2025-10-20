import { useQuery } from "@tanstack/react-query";

import { useApiRequest } from "@/hooks/useApiRequest";

import { DriversDataProps } from "@/components/drivers/types";

export const DriverService = (driverId?: string) => {
  const { makeAPIRequest } = useApiRequest();

  const {
    data: driversData,
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
  });

  const { data: { driver } = {}, isFetching: driverFetching } = useQuery<{
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
  };
};
