import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

import toast from "react-hot-toast";

import { LoginAuthProps } from "@/types/auth";
import { useAPIMutation } from "./useAPIMutation";

const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuthContext();

  // Use the useAPImutation hook for logging in
  const mutation = useAPIMutation({
    endpoint: "admin/login",
    method: "POST",
    onSuccess: (data) => {
      toast.success("Login Success...");
      //pass token to auth context
      login(data.token);
      //Redirect
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  //login handler
  const loginHandler = async (formData: LoginAuthProps) => {
    try {
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

  return { loginHandler, isLoading: mutation.status === "pending" };
};

export default useLogin;
