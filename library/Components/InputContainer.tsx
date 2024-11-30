import React from "react";
import { Label } from "@radix-ui/react-label";

function InputContainer({
  label,
  children,
  p,
}: Readonly<{
  label?: string;
  p?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-2">
      <Label className="mx-2 text-sm font-semibold after:ml-0.5 after:text-red-500 after:content-['*']">
        {label}
      </Label>
      {children}
      <p className="mx-2 text-xs text-gray-400">{p}</p>
    </div>
  );
}
export default InputContainer;
