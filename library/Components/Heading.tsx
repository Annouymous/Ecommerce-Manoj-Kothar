import React from "react";

function Heading(heading: string) {
  return (
    <header>
      <h1 className="text-2xl font-bold">{heading}</h1>
    </header>
  );
}

export default Heading;
