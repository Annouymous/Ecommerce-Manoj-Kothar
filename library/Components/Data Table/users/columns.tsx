"use client";
import moment from "moment";
import { ColumnDef } from "@tanstack/react-table";

import Image from "next/image";
import { MoreHorizontal, MoreVertical } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Users = {
  createdAt: string;
  displayName: string;
  email: string;
  photoUrl: string;
  providerId: string;
  uid: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "photoUrl",
    header: "Profile",
    cell: ({ row }) => {
      return row ? (
        <Image
          src={row.getValue("photoUrl")}
          alt="Image"
          width={35}
          height={35}
          className="size-[35px] rounded-xl object-cover object-center"
        />
      ) : (
        <span className="size-[35px] rounded-full bg-gray-400" />
      );
    },
  },
  {
    accessorKey: "displayName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nickname
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const iD = row.getValue("displayName") as string;
      return <span className="font-medium text-gray-600">{iD}</span>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const iD = row.getValue("email") as string;
      return <span className="font-medium text-gray-600">{iD}</span>;
    },
  },
  {
    accessorKey: "uid",
    header: "ID",
    cell: ({ row }) => {
      const iD = row.getValue("uid") as string;
      return <span className="font-medium text-gray-500">#{iD}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Time",
    cell: ({ row }) => {
      const time = row.getValue("createdAt") as string;
      const F = moment(time).calendar();
      return (
        <div className="flex items-center justify-between">
          <span className="text-gray-500">{F}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreVertical className="h-4 w-4 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View User details</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-600 hover:text-red-500 data-[hover]:text-green-500">
                Delete user
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
