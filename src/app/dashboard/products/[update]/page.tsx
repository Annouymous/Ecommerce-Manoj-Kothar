"use client";
import AddProduct from "@/library/Screens/Products/AddProduct";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { update } = useParams();
  return (
    <AddProduct
      ButtonLabel="Update Product"
      type="Update"
      updateId={update as string}
    />
  );
}

export default page;
