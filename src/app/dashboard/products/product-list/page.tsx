import { GetProducts } from "@/Functions/Firebase";
import { columns } from "@/library/Components/Data Table/Product/columns";
import { DataTable } from "@/library/Components/Data Table/Product/data-table";
import React from "react";

async function page() {
  const result = await GetProducts();

  return (
    <div className="m-3 flex flex-col rounded-md bg-white p-5 shadow-sm">
      <DataTable columns={columns} data={result} />
    </div>
  );
}

export default page;
