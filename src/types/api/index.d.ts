import { FieldValues } from "react-hook-form";

export type UseAPIMutationOptions = {
  endpoint: string;
  method: string;
  onMutate?: () => void;
  onSuccess?: (data: unknown) => void;
  onError?: (error: Error) => void;
};

export interface TRequestProps {
  endpoint: string;
  data?: FieldValues;
  method: string;
  token?: string | null;
}
