"use client";
import React, { useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AuthorContext } from "@/context/authorization";
import Image from "next/image";
import { signOut } from "@/Functions/Firebase";
import Link from "next/link";

function ProfileMenu({}) {
  const user = useContext(AuthorContext);
  return (
    <Menu as="div" className="ml-3 min-w-52">
      <div>
        <MenuButton className="relative flex flex-row gap-2">
          <div className="rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-500">
            <span className="sr-only">Open user menu</span>
            {user?.user?.photoURL && (
              <Image
                className="size-[40px] rounded-full"
                alt="Icon"
                width={40}
                height={40}
                src={user?.user?.photoURL}
              />
            )}
          </div>
          <div className="flex flex-col items-start">
            <span className="max-w-40 truncate text-sm font-semibold text-gray-900">
              Hello, {user?.user?.displayName}
            </span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MenuItem>
          <Link
            href={"/dashboard/settings"}
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
          >
            Settings
          </Link>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => signOut()}
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
          >
            Sign out
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export default ProfileMenu;
