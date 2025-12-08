import { useAPIMutation } from "./useAPIMutation";
import { useQueryClient } from "@tanstack/react-query";

import { useGlobalContext } from "./useGlobalContext";

import toast from "react-hot-toast";

const useAssignDriver = () => {
  const queryClient = useQueryClient();

  const { selectedItemId } = useGlobalContext();

  // Use the useAPImutation hook for assigning driver
  const mutation = useAPIMutation({
    endpoint: `admin/bookings/${selectedItemId}/assign-driver`,
    method: "PATCH",
    onMutate: () => {
      console.log("Assigning Driver request...");
    },
    onError: (error) => {
      toast.error(error.message, { duration: 5000 });
      console.log(error);
    },
  });

  //assign driver to ride function
  const assignDriverHandler = async (
    driverId: string,
    shift: string | null
  ) => {
    try {
      const data = {
        driverId,
        shift,
      };

      //Invoke mutation
      await mutation.mutateAsync(data, {
        onSuccess: (data) => {
          if (data) {
            toast.success("Driver assigned successfully!");
          }

          //refetch updated ride booking datas
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
    assignDriverHandler,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};

export default useAssignDriver;
