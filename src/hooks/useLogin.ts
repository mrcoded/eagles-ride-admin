import toast from "react-hot-toast";

import { LoginAuthProps } from "@/types/auth";
import { useAPIMutation } from "./useAPIMutation";

import { useGlobalContext } from "./useGlobalContext";

const useLogin = (formData: LoginAuthProps) => {
  const { setIsLoading } = useGlobalContext();

  // Use the useAPImutation hook for logging in
  const mutation = useAPIMutation({
    endpoint: "admin/login",
    method: "POST",
    onMutate: () => {
      // console.log("Starting login request...");
      setIsLoading(true);
    },
    onSuccess: (data) => {
      setIsLoading(false);
      console.log(data);
      toast.success("Login Success! Redirecting...");
    },
    onError: (error) => {
      setIsLoading(false);
      toast.error(error.message);
    },
  });

  //approve driver function
  return async () => {
    try {
      setIsLoading(true);

      if (!formData.email || !formData.password) return;

      const data = {
        email: formData.email,
        password: formData.password,
      };

      //Invoke mutation
      mutation.mutateAsync(data);
    } catch (error) {
      console.log(error);
    }
  };
};

export default useLogin;
