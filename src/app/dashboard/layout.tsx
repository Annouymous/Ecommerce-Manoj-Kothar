import Header from "@/library/Components/Layout/Header";
import LayoutWrapper from "@/library/Components/Layout/LayoutWrapper";
import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen md:flex-row">
      <LayoutWrapper />
      <div className="flex w-full flex-col bg-blue-50">
        <Header />
        {children}
      </div>
    </div>
  );
}
