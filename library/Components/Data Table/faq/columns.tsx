"use client";
import moment from "moment";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { MoreHorizontal, MoreVertical } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Timestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { DeleteQuestion } from "@/Functions/Firebase";
import toast from "react-hot-toast";

interface Document {
  id?: string; // Optional
  question?: string; // Optional
  answer?: string; // Optional
  createdAt?: string; // Optional
  pid: string; // Required
}

const HandleOnDeleteQuestion = (id: string) => {
  try {
    DeleteQuestion(id);
    toast.success("Question deleted successfully");
  } catch (error) {
    toast.error("Error while deleting question");
  }
};
export const columns: ColumnDef<Document>[] = [
  {
    accessorKey: "question",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Question
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const question = row.getValue("question") as string;
      return <span className="font-medium text-gray-600">{question}</span>;
    },
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => {
      const iD = row.getValue("id") as string;
      return <span className="font-medium text-gray-500">#{iD}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Question
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const time = row.getValue("createdAt") as Timestamp;
      const pid = row.original.pid;
      let F;
      if (time && typeof time.toDate === "function") {
        const date = time.toDate();
        F = moment(date).calendar(); // Format using moment
      } else {
        F = moment().calendar();
      }
      return (
        <div className="flex items-center justify-between">
          <span className="text-gray-500">{F}</span>

          <Button
            onClick={() => HandleOnDeleteQuestion(pid)}
            variant="destructive"
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];
