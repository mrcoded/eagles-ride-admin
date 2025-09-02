import { useQuery } from "@tanstack/react-query";

import { useApiRequest } from "@/hooks/useApiRequest";

import { DriversDataProps } from "@/types/drivers";

export const DriverService = () => {
  const { makeAPIRequest } = useApiRequest();

  const {
    data: driversData,
    isFetching: driversFetching,
    isError: driversError,
  } = useQuery<DriversDataProps[]>({
    queryKey: ["drivers"],
    queryFn: () =>
      makeAPIRequest({
        endpoint: "/drivers",
        method: "GET",
      }),
  });

  return { driversData, driversFetching, driversError };
};
