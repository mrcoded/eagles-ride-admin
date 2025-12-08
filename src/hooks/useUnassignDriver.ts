import toast from "react-hot-toast";

import { useAPIMutation } from "./useAPIMutation";
import { useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "./useGlobalContext";

const useUnAssignDriver = () => {
  const queryClient = useQueryClient();

  //GET data from context
  const { selectedItemId } = useGlobalContext();

  // Use the useAPImutation hook for assigning driver
  const mutation = useAPIMutation({
    endpoint: `admin/bookings/${selectedItemId}/unassign-driver`,
    method: "PATCH",
    onMutate: () => {
      console.log("Unassigning Driver request...");
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  //unassign driver to ride function
  const unassignDriverHandler = async (driverId: string | undefined) => {
    try {
      //pass driver id
      const data = {
        driverId,
      };

      //Invoke mutation
      await mutation.mutateAsync(data, {
        onSuccess: (data) => {
          if (data) {
            toast.success(data?.message);
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
