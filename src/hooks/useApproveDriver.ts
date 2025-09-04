import toast from "react-hot-toast";

import { useAPIMutation } from "./useAPIMutation";
import { useQueryClient } from "@tanstack/react-query";
import { useGlobalContext } from "./useGlobalContext";

const useApproveDriver = () => {
  const queryClient = useQueryClient();

  //GET data from global context
  const { selectedItemId, selectedRideData } = useGlobalContext();

  // Use the useAPImutation hook for approving driver
  const mutation = useAPIMutation({
    endpoint: `admin/approve-driver/${selectedItemId}`,
    method: "PATCH",
    onMutate: () => {
      console.log("Approving Driver request...");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  //approve driver function
  const approveDriverHandler = async () => {
    try {
      //check if item is a driver
      const isDriver = selectedRideData?.isDriverApproved;

      const data = {
        is_approved: !isDriver,
      };

      //Invoke mutation
      await mutation.mutateAsync(data, {
        onSuccess: () => {
          //refetch updated driver data
          queryClient.invalidateQueries(
            { queryKey: ["drivers"] },
            { cancelRefetch: true }
          );

          if (!selectedRideData?.isDriverApproved) {
            toast.success("Driver approved successfully!");
          } else toast.success("Driver disapproved successfully!");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    approveDriverHandler,
    isLoading: mutation.isPending,
  };
};

export default useApproveDriver;
