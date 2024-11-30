import Image from "next/image";
import React from "react";
import Connect from "@/public/elements/img-bot.png";
import { CiInstagram } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
function ConnectWithMe() {
  return (
    <div className="flex flex-col gap-4">
      <span className="px-3 py-2 text-[12px] font-bold uppercase text-gray-400/60">
        Connect with me -{" "}
      </span>
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <Image
          src={Connect}
          alt="Connect with me"
          className="h-48 object-scale-down"
        />
        <h1 className="font-semibold">Hi, Do you want to connect?</h1>
        <span className="text-xs text-black/45">I'm always here to help!</span>
        <Button className="w-full bg-sky-500">Connect</Button>
        <span className="text-xs text-gray-400">
          (I'm a freelance software developer)
        </span>
        <span className="text-xs text-black/45">
          Contact me if you have any Work or want to start working on your new
          project
        </span>
      </div>
    </div>
  );
}

export default ConnectWithMe;
