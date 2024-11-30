import Image from "next/image";
import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

import { User } from "firebase/auth";
import Loader from "../Loader";

function UpdateProfileIcon({
  user,
  LoadingStatus,
  onIconChange,
}: Readonly<{
  user: User;
  LoadingStatus: boolean;
  onIconChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}>) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="mt-2 flex items-center gap-x-3">
        {LoadingStatus ? (
          <Loader />
        ) : user?.photoURL ? (
          <Image
            className="h-28 w-28 rounded-full"
            alt="Icon"
            width={130}
            height={130}
            src={user?.photoURL}
          />
        ) : (
          <UserCircleIcon
            aria-hidden="true"
            className="size-24 text-gray-300"
          />
        )}
        <div>
          <input
            type="file"
            id="fileInput"
            onChange={onIconChange}
            accept="image/*"
            className="sr-only"
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Change
          </label>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfileIcon;
