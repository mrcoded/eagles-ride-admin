import toast from "react-hot-toast";

import { useAPIMutation } from "./useAPIMutation";
import { useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "./useGlobalContext";

const useUnAssignDriver = () => {
  const queryClient = useQueryClient();

  //GET data from context
  const { selectedItemId, selectedRideData } = useGlobalContext();

  // Use the useAPImutation hook for assigning driver
  const mutation = useAPIMutation({
    endpoint: `admin/bookings/${selectedItemId}/unassign-driver`,
    method: "PATCH",
    onMutate: () => {
      console.log("Unassigning Driver request...");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  //unassign driver to ride function
  const unassignDriverHandler = async (driverId: string | null) => {
    try {
      //pass driver id
      const data = {
        driverId,
      };

      //check if driver is unassigned
      const isDriverAssigned = selectedRideData?.drivers?.some(
        (driver: { _id: string }) => driver._id !== driverId
      );

      //Invoke mutation
      await mutation.mutateAsync(data, {
        onSuccess: () => {
          //check updated driver data
          if (!isDriverAssigned) {
            toast.success("Driver unassigned successfully.");
          }

          //invalidate updated bookings data
          queryClient.invalidateQueries(
            { queryKey: ["book/all-rides"] },
            { cancelRefetch: true }
          );
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    unassignDriverHandler,
    isLoading: mutation.isPending,
  };
};

export default useUnAssignDriver;
