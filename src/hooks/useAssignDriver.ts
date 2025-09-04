import { useAPIMutation } from "./useAPIMutation";
import { useQueryClient } from "@tanstack/react-query";

import { useGlobalContext } from "./useGlobalContext";

import toast from "react-hot-toast";

const useAssignDriver = () => {
  const queryClient = useQueryClient();

  const { selectedItemId, selectedRideData } = useGlobalContext();

  // Use the useAPImutation hook for assigning driver
  const mutation = useAPIMutation({
    endpoint: `admin/bookings/${selectedItemId}/assign-driver`,
    method: "PATCH",
    onMutate: () => {
      console.log("Assigning Driver request...");
    },
    onError: (error) => {
      toast.error(error.message);
      // console.log(error);
    },
  });

  //assign driver to ride function
  const assignDriverHandler = async (driverId: string) => {
    try {
      //Get existing assign driver IDs
      const selectedDriverIds =
        selectedRideData?.drivers?.map(
          (driver: { _id: string }) => driver._id
        ) || [];

      //check if driver is already assigned
      const isDriverAssigned = selectedDriverIds.includes(driverId);
      if (isDriverAssigned) {
        toast.error("Driver already assigned!");
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

          //check if driver is unassigned
          if (selectedRideData?.status !== "assigned") {
            toast.success("Driver assigned successfully!");
          }

          //check if driver is assigned
          if (selectedRideData?.status === "assigned" && isDriverAssigned) {
            toast.success("Driver unassigned successfully!");
          }

          //check if assigned drivers are more than two
          if (selectedRideData?.status === "assigned" && !isDriverAssigned) {
            toast.error("Assigned drivers are more than two!");
          }
        },
      });
    } catch (error) {
      // setIsLoading(false);
      console.log(error);
    }
  };

  return {
    assignDriverHandler,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};

export default useAssignDriver;
