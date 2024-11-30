import React from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col overflow-y-auto rounded-md">{children}</div>
  );
}

export default layout;
