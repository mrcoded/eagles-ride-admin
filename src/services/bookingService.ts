import { useQuery } from "@tanstack/react-query";

import { useApiRequest } from "@/hooks/useApiRequest";

import { BookingsDataProps } from "@/components/bookings/types";

export const BookingService = () => {
  const { makeAPIRequest } = useApiRequest();

  const { data: { rides } = { rides: [] }, isFetching: ridesFetching } =
    useQuery<{
      rides: BookingsDataProps["rides"][];
    }>({
      queryKey: ["book/all-rides"],
      queryFn: () =>
        makeAPIRequest({
          endpoint: "book/all-rides",
          method: "GET",
        }),
    });
  console.log(rides);
  return { rides, ridesFetching };
};
