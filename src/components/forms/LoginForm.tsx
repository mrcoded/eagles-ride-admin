import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

import toast from "react-hot-toast";
import { useAPIMutation } from "../hooks/useAPIMutation";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Use the useAPImutation hook for logging in
  const mutation = useAPIMutation({
    endpoint: "admin/login",
    method: "POST",
    onMutate: () => {
      console.log("Starting login request...");
      setIsLoading(true);
    },
    onSuccess: (data) => {
      setIsLoading(false);
      console.log(data);
      toast.success("Login Success! Signing In...");
    },
    onError: (error) => {
      setIsLoading(false);
      toast.error(error.message);
    },
  });
  //`
  const onchangeHandler = async (e: any) => {
    setFormData((prevData) => ({
      ...prevData, // Keep previous state
      [e.target.name]: e.target.value, // Update changed field
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

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

  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <CardTitle>Welcome Back ADMIN</CardTitle>
        <CardDescription>Login with your credentials below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                onChange={onchangeHandler}
                placeholder="admin@eagle-ride.com"
                required
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                onChange={onchangeHandler}
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit" isLoading={mutation.isPending}>
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
