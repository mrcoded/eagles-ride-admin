import { FieldValues } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { UseAPIMutationOptions } from "@/types";
import { makeAPIRequest } from "@/lib/apiRequest";

export function useAPIMutation(options: UseAPIMutationOptions) {
  const { endpoint, method, onMutate, onSuccess, onError } = options;

  return useMutation({
    mutationFn: async (data: FieldValues) => {
      try {
        const response = await makeAPIRequest({
          endpoint,
          data,
          method,
        });
        // console.log(response);
        //check for invalid credentials (customize as needed)
        if (response.message === "Invalid Credentials") {
          throw new Error(response.message);
        }
        return response;
      } catch (error: unknown) {
        // console.log(error);
        throw new Error((error as Error).message);
      }
    },
    onMutate: () => {
      if (onMutate) {
        onMutate();
      }
    },
    onSuccess: (data) => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (error: any) => {
      if (onError) {
        onError(error);
      }
    },
  });
}
