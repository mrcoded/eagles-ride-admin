import { MouseEvent } from "react";
import toast from "react-hot-toast";

import { useAPIMutation } from "./useAPIMutation";
import { useQueryClient } from "@tanstack/react-query";

const useAssignDriver = ({
  selectedItemId,
  selectedRideData,
  setIsLoading,
}: any) => {
  const queryClient = useQueryClient();

  // Use the useAPImutation hook for assigning driver
  const mutation = useAPIMutation({
    endpoint: `admin/bookings/${selectedItemId}/assign-driver`,
    method: "PATCH",
    onMutate: () => {
      console.log("Assigning Driver request...");
      setIsLoading(true);
    },
    onError: (error) => {
      setIsLoading(false);
      toast.error(error.message);
      console.log(error);
    },
  });

  //assign driver to ride function
  return async (e: MouseEvent<HTMLButtonElement>, driverId: string) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      //Get existing assign driver IDs
      const selectedDriverIds =
        selectedRideData?.drivers?.map(
          (driver: { _id: string }) => driver._id
        ) || [];

      //check if driver is already assigned
      const isDriverAssigned = selectedDriverIds.includes(driverId);
      if (isDriverAssigned) {
        toast.error("Driver already assigned!");
        setIsLoading(false);
        return;
      }

      const data = {
        driverId,
      };

      //Invoke mutation
      await mutation.mutateAsync(data, {
        onSuccess: () => {
          //refetch updated ride booking datas
          queryClient.invalidateQueries(
            { queryKey: ["book/all-rides"] },
            { cancelRefetch: true }
          );
          setIsLoading(false);

          selectedRideData?.status === "assigned"
            ? toast.success("Driver assigned successfully!")
            : toast.success("Driver unassigned successfully!");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default useAssignDriver;
