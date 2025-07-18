import { MouseEvent } from "react";
import toast from "react-hot-toast";

import { useAPIMutation } from "./useAPIMutation";
import { useQueryClient } from "@tanstack/react-query";

const useApproveDriver = ({
  selectedItemId,
  selectedRideData,
  setIsLoading,
}: any) => {
  const queryClient = useQueryClient();

  // Use the useAPImutation hook for approving driver
  const mutation = useAPIMutation({
    endpoint: `admin/approve-driver/${selectedItemId}`,
    method: "PATCH",
    onMutate: () => {
      console.log("Approving Driver request...");
      setIsLoading(true);
    },
    onError: (error) => {
      setIsLoading(false);
      toast.error(error.message);
      console.log(error);
    },
  });

  //approve driver function
  return async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);

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
          setIsLoading(false);

          selectedRideData?.isDriverApproved
            ? toast.success("Driver dispproved successfully!")
            : toast.success("Driver approved successfully!");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default useApproveDriver;
