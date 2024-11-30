import { usePathname } from "next/navigation";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="m-8">{children}</div>;
}

export default layout;
