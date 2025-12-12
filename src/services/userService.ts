import { useQuery } from "@tanstack/react-query";

import { useApiRequest } from "@/hooks/useApiRequest";

import { UserProps } from "@/types/bookings";

export const UserService = (
  selectedUserId?: string,
  selectedRideData?: {
    child?: {
      _id: string;
    };
  }
) => {
  const { makeAPIRequest } = useApiRequest();

  //Get selected user
  const { data: { user } = {}, isFetching: userFetching } = useQuery<{
    user: UserProps;
  }>({
    queryKey: [`users/${selectedUserId}`],
    queryFn: () =>
      makeAPIRequest({
        endpoint: `users/${selectedUserId}`,
        method: "GET",
      }),
    enabled: !!selectedUserId,
  });

  //Get all users
  const { data: usersData = [] } = useQuery<UserProps[]>({
    queryKey: ["users"],
    queryFn: () =>
      makeAPIRequest({
        endpoint: `users`,
        method: "GET",
      }),
  });

  //Get user child
  const { data: childData, error: childError } = useQuery<UserProps["child"]>({
    queryKey: [`users/child/${selectedRideData?.child?._id}`],
    queryFn: () =>
      makeAPIRequest({
        endpoint: `users/child/${selectedRideData?.child?._id}`,
        method: "GET",
      }),
    enabled: !!selectedRideData,
  });

  return {
    user,
    userFetching,
    usersData,
    childData,
    childError,
  };
};
