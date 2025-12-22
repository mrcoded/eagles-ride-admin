import { useState } from "react";
import { Eye, EyeClosedIcon } from "lucide-react";
import { FieldValues } from "react-hook-form";

import useLogin from "@/hooks/useLogin";
import { useAuthContext } from "@/hooks/useAuthContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { loginData, setLoginData } = useAuthContext();

  const { loginHandler, isLoading } = useLogin();

  //Submit handler
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginHandler(loginData);
  };

  //Input onChange Handler
  const onchangeHandler = async (e: FieldValues) => {
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className="w-full max-w-[400px]">
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
            <div className="relative flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                onChange={onchangeHandler}
                required
              />
              <span
                className="absolute right-0 top-1/2 transform -translate-y-1/2 m-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Eye className="size-4 " />
                ) : (
                  <EyeClosedIcon className="size-4" />
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit" isLoading={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
