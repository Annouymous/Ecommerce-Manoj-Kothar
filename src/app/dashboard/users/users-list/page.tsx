import { Users } from "@/constant/types";
import { getData } from "@/Functions/Firebase";
import { columns } from "@/library/Components/Data Table/users/columns";
import { DataTable } from "@/library/Components/Data Table/users/data-table";
import React from "react";

async function page() {
  const result = await getData("users");

  return (
    <div className="flex flex-col rounded-md bg-white p-5 shadow-sm">
      <DataTable columns={columns} data={result as Users} />
    </div>
  );
}

export default page;
