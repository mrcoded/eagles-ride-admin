import { MouseEvent } from "react";
import toast from "react-hot-toast";

import { useAPIMutation } from "./useAPIMutation";
import { useQueryClient } from "@tanstack/react-query";

const useUnAssignDriver = ({
  selectedItemId,
  selectedRideData,
  setIsLoading,
}: any) => {
  const queryClient = useQueryClient();

  // Use the useAPImutation hook for assigning driver
  const mutation = useAPIMutation({
    endpoint: `admin/bookings/${selectedItemId}/unassign-driver`,
    method: "PATCH",
    onMutate: () => {
      console.log("Unassigning Driver request...");
      setIsLoading(true);
    },
    onError: (error) => {
      setIsLoading(false);
      toast.error(error.message);
      console.log(error);
    },
  });

  //assign driver to ride function
  return async (
    e: MouseEvent<HTMLButtonElement>,
    driverId: string | undefined
  ) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const data = {
        driverId,
      };

      //Invoke mutation
      await mutation.mutateAsync(data, {
        onSuccess: () => {
          //check updated driver data
          if (
            selectedRideData?.drivers?.some(
              (d: { _id: string }) => d._id !== driverId
            )
          ) {
            toast.success("Driver unassigned successfully.");
          }

          //invalidate updated bookings data
          queryClient.invalidateQueries(
            { queryKey: ["book/all-rides"] },
            { cancelRefetch: true }
          );
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default useUnAssignDriver;
