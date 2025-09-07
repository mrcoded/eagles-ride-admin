import { useAuthContext } from "./useAuthContext";
import { apiRequest } from "@/lib/apiRequest";

import { TRequestProps } from "@/types/api";

export const useApiRequest = () => {
  const { token } = useAuthContext();

  const makeAPIRequest = async (params: TRequestProps) => {
    return apiRequest({ ...params, token });
  };

  return { makeAPIRequest };
};
