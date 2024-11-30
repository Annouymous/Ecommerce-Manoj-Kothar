import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeadFragment from "../HeadFragment";
import InputContainer from "../InputContainer";

function CreateUser({
  onClick,
  onEmailChange,
  onPasswordChange,
}: Readonly<{
  onEmailChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>) {
  return (
    <div className="m-3 flex min-w-[400px] max-w-[400px] flex-col rounded-md border border-gray-300 bg-white p-5 shadow-sm">
      <HeadFragment
        des="you must assign access credentials"
        title="Create User Account"
      />
      <div className="flex flex-col gap-5">
        <InputContainer label="Email">
          <Input
            onChange={onEmailChange}
            autoComplete={"email"}
            type="email"
            placeholder="example@gmail.com"
          />
        </InputContainer>
        <InputContainer
          p="Password must be more then 6+ character"
          label="Password"
        >
          <Input
            onChange={onPasswordChange}
            type="password"
            placeholder="Enter Password"
          />
        </InputContainer>
        <Button onClick={onClick} className="bg-sky-500 text-white">
          {" "}
          Create User
        </Button>
      </div>
    </div>
  );
}

export default CreateUser;
