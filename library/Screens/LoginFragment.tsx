import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

function LoginFragment({
  HandleForm,
  onEmailChange,
  onPasswordChange,
  AdminLogo,
  Error,
  loadingStatus,
}: Readonly<{
  AdminLogo: string;
  HandleForm?: (event: React.FormEvent) => void;
  onEmailChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loadingStatus?: boolean;
  Error: string;
}>) {
  return (
    <div>
      {AdminLogo.length > 0 && (
        <img
          alt="logo"
          className="mb-2 h-auto w-52 object-contain"
          src={AdminLogo}
        />
      )}
      <form onSubmit={HandleForm}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={onEmailChange}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={onPasswordChange}
                minLength={6}
                id="password"
                type="password"
                required
              />
            </div>
            {Error?.length > 0 && (
              <p className="my-1 text-sm font-medium text-red-500">{Error}</p>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              {loadingStatus && (
                <div
                  className="text-surface mx-3 inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              )}
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
export default LoginFragment;
