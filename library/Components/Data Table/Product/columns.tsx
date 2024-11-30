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
import { DocumentData } from "firebase/firestore";
import { useRouter } from "next/navigation";

export const columns: ColumnDef<DocumentData>[] = [
  {
    accessorKey: "coverImage",
    header: "Product Image",

    cell: ({ row }) => {
      return row ? (
        <Image
          src={row.getValue("coverImage")}
          alt="Image"
          width={100}
          height={140}
          className="rounded-xl object-contain object-center"
        />
      ) : (
        <span className="size-[35px] rounded-full bg-gray-400" />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const ProductName = row.getValue("name") as string;
      return <span className="text-gray-black capitalize">{ProductName}</span>;
    },
  },
  {
    accessorKey: "price",
    header: "Price ",
    cell: ({ row }) => {
      const price = row.getValue("price") as string;
      return <span className="font-medium text-gray-400">{price}</span>;
    },
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product-Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const iD = row.getValue("id") as string;
      return <span className="font-medium text-gray-600">{iD}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created",
    cell: ({ row }) => {
      const router = useRouter();
      const id = row.original["id"] as string;
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
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => router.push(`/dashboard/products/${id}`)}
              >
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
