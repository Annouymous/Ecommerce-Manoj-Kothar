import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { FaAddressCard } from "react-icons/fa6";

function page() {
  return (
    <div className="m-8 flex h-screen flex-row flex-wrap gap-2">
      <div className="flex w-full flex-row gap-4">
        <Skeleton className="h-60 w-96 rounded-2xl" />
        <Skeleton className="h-60 w-48 rounded-2xl" />
        <Skeleton className="flex h-60 grow rounded-2xl" />
      </div>
      <Skeleton className="h-60 w-2/3 rounded-2xl" />
    </div>
  );
}

export default page;
