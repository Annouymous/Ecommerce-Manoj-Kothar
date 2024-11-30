"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SingleView({
  children,
  text,
  href,
}: Readonly<{
  children: React.ReactNode;
  text: string;
  href: string;
}>) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`group flex h-12 w-full flex-row items-center gap-3 rounded-md fill-black p-3 text-black hover:text-sky-600 ${path === href && "bg-sky-50 fill-sky-600 text-sky-600"} `}
    >
      {/* <CiSettings  className="fill-slate-500 group-data-[hover]:fill-sky-500/80" /> */}
      {children}
      <span className={`text-sm font-semibold leading-4`}>{text}</span>
    </Link>
  );
}

export default SingleView;
