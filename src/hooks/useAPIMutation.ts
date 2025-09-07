import { FieldValues } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { UseAPIMutationOptions } from "@/types/api";
import { useApiRequest } from "@/hooks/useApiRequest";

export function useAPIMutation(options: UseAPIMutationOptions) {
  const { makeAPIRequest } = useApiRequest();
  const { endpoint, method, onMutate, onSuccess, onError } = options;

  return useMutation({
    mutationFn: async (data: FieldValues) => {
      try {
        const response = makeAPIRequest({
          endpoint,
          data,
          method,
        });

        console.log(response);
        return response;
      } catch (error: unknown) {
        console.log(error);
        throw new Error((error as Error).message);
      }
    },
    onMutate: () => {
      if (onMutate) {
        onMutate();
      }
    },
    onSuccess: (data: unknown) => {
      if (onSuccess) {
        onSuccess(data);
      }
    },
    onError: (error: Error) => {
      if (onError) {
        onError(error);
      }
    },
  });
}
