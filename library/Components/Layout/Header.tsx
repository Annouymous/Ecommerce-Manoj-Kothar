"use client";
import React, { useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { signOut } from "@/Functions/Firebase";
import { AuthorContext } from "@/context/authorization";
import { Input } from "@/components/ui/input";
import { IoMoonOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { RiFullscreenFill } from "react-icons/ri";
import { AiOutlineAppstore } from "react-icons/ai";

import toast from "react-hot-toast";
import { toast as Toaster } from "sonner";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMenuUnfold3Line } from "react-icons/ri";
import Ping from "../Ping";
import ProfileMenu from "./ProfileMenu";
import { useRouter } from "next/navigation";

const IconContainer = ({
  children,
  fn,
}: {
  children: React.ReactNode;
  fn: () => void;
}) => {
  return (
    <div
      onClick={fn}
      className="relative flex cursor-pointer items-center justify-center rounded-full bg-gray-200/75 p-2 hover:bg-gray-300"
    >
      {children}
    </div>
  );
};

function Header() {
  const route = useRouter();
  const user = useContext(AuthorContext);
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      toast.success("fullscreen");
      document.documentElement.requestFullscreen();
    } else {
      toast.success("exitfullscreen");
      document.exitFullscreen();
    }
  };

  const ErrorMessage = () => {
    Toaster("This Feature is Under Development", {
      description: new Date().toISOString(),
      action: {
        label: "hide",
        onClick: () => console.log("Undo"),
      },
    });
  };
  return (
    <header className="flex h-20 min-h-14 w-full items-center gap-5 bg-white p-8">
      {!user?.LayoutWrapperVisible && (
        <button
          onClick={() =>
            user?.setLayoutWrapperVisible(!user?.LayoutWrapperVisible)
          }
        >
          <RiMenuUnfold3Line className="size-6 text-blue-600" />
        </button>
      )}

      <Input
        className="h-12 rounded-lg border border-gray-200/70 shadow-none placeholder:text-gray-400/90"
        placeholder="Search here..."
      />
      <IconContainer fn={ErrorMessage}>
        <IoMoonOutline className="size-5" />
      </IconContainer>
      <IconContainer fn={ErrorMessage}>
        <Ping Color="blue" />
        <IoNotificationsOutline className="size-5" />
      </IconContainer>
      <IconContainer fn={ErrorMessage}>
        <Ping Color="orange" />
        <FiMessageSquare className="size-5" />
      </IconContainer>
      <IconContainer fn={toggleFullscreen}>
        <RiFullscreenFill className="size-5" />
      </IconContainer>
      <IconContainer fn={ErrorMessage}>
        <AiOutlineAppstore className="size-5" />
      </IconContainer>
      <ProfileMenu />
      <IconContainer fn={() => route.push("/dashboard/general")}>
        <IoSettingsOutline className="size-7 animate-rotate360" />
      </IconContainer>
    </header>
  );
}

export default Header;
