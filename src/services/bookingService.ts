import { useQuery } from "@tanstack/react-query";

import { useApiRequest } from "@/hooks/useApiRequest";

import { BookingsDataProps } from "@/types/bookings";

export const BookingService = () => {
  const { makeAPIRequest } = useApiRequest();

  const {
    data: { rides } = { rides: [] },
    isPending: ridesPending,
    isFetching: ridesFetching,
    isError: ridesError,
  } = useQuery<{
    rides: BookingsDataProps["rides"][];
  }>({
    queryKey: ["book/all-rides"],
    queryFn: () =>
      makeAPIRequest({
        endpoint: "book/all-rides",
        method: "GET",
      }),
  });

  return {
    rides,
    ridesFetching,
    ridesPending,
    ridesError,
  };
};
