import { FieldValues } from "react-hook-form";

import useLogin from "@/hooks/useLogin";
import { useAuthContext } from "@/hooks/useAuthContext";

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

export function LoginForm() {
  const { formData, setFormData } = useAuthContext();

  const { loginHandler, isLoading } = useLogin(formData);

  //Submit handler
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginHandler();
  };

  //Input onChange Handler
  const onchangeHandler = async (e: FieldValues) => {
    setFormData((prevData) => ({
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
            <Button type="submit" isLoading={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
