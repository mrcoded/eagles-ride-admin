import { Loader2 } from "lucide-react";

import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "@/context/GlobalContext";

import AssignDriver from "../AssignDriver";
import SelectedItemInfo from "../SelectedItemInfo";
import SelectedItemCard from "../SelectedItemCard";
import SelectedUserAvatar from "../SelectedUserAvatar";

import { BookingsModalProps, UserProps } from "@/types";

const RideTableModal = ({ bookings, drivers }: BookingsModalProps) => {
  const { selectedUserId, selectedItemId, isLoading, setIsLoading } =
    useGlobalContext();

  const { data: { user } = {}, isFetching: userFetching } = useQuery<{
    user: UserProps;
  }>({
    queryKey: [`users/${selectedUserId}`],
    enabled: !!selectedUserId,
  });

  //Get selected ride data
  const selectedRideData = bookings?.filter(
    (data: { _id: string }) => data._id === selectedItemId
  )[0];

  //Get child data
  const { data: childData, error: childError } = useQuery<UserProps>({
    queryKey: [`users/child/${selectedRideData?.child?._id}`],
  });

  return userFetching ? (
    <Loader2 className="block items-center justify-center stroke-primary size-5 text-white animate-spin" />
  ) : (
    <div className="flex flex-col items-center justify-center flex-1 h-screen bg-orange-400 py-2.5 rounded-t-2xl shadow space-y-3.5 ">
      <SelectedUserAvatar data={user} />

      {/* Selected Item Card */}
      <SelectedItemCard selectedItemData={selectedRideData} />

      {/* Assign Driver */}
      <AssignDriver
        drivers={drivers}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        selectedItemId={selectedItemId}
        selectedRideData={selectedRideData}
      />

      <SelectedItemInfo
        user={user}
        childData={childData}
        childError={childError}
        selectedRide={selectedRideData}
      />
    </div>
  );
};

export default RideTableModal;
