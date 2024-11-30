import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

type STATUS =
  | "In-cart"
  | "Pending"
  | "Delivered"
  | "Cancelled"
  | "Returned"
  | "shipped"
  | "In-transit";
function StatusAlert({ status }: { status: STATUS }) {
  return (
    <div
      className={`flex min-h-12 w-full items-center gap-2 rounded-lg border ${status === "Pending" && "border-yellow-500 bg-yellow-200 px-6 text-yellow-500"} ${status === "Delivered" && "border-green-500 bg-green-200 px-6 text-green-500"} ${status === "Cancelled" && "border-red-500 bg-red-200 px-6 text-red-500"} ${status === "Returned" && "border-orange-500 bg-orange-200 px-6 text-orange-500"} ${status === "shipped" && "border-blue-500 bg-blue-200 px-6 text-blue-500"} ${status === "In-transit" && "border-purple-500 bg-purple-200 px-6 text-purple-500"} ${status === "In-cart" && "border-gray-300 bg-gray-200 px-6 text-gray-500"} `}
    >
      <FaCircleInfo />
      Order<strong>#1613216</strong>
      status is
      <strong>{status}</strong>
    </div>
  );
}

export default StatusAlert;
