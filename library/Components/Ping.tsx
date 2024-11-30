import React from "react";

type Colors =
  | "black"
  | "white"
  | "orange"
  | "sky"
  | "blue"
  | "yellow"
  | "green";
function Ping({ Color }: { Color: Colors }) {
  return (
    <div className="absolute -right-1 -top-2">
      <div
        className={`absolute size-5 animate-ping rounded-full ${
          (Color === "sky" && "bg-sky-600") ||
          (Color === "blue" && "bg-blue-600") ||
          (Color === "yellow" && "bg-yellow-600") ||
          (Color === "green" && "bg-green-600") ||
          (Color === "orange" && "bg-orange-600") ||
          (Color === "white" && "bg-white") ||
          (Color === "black" && "bg-black")
        } `}
      />
      <div
        className={`flex size-5 items-center justify-center rounded-full ${
          (Color === "sky" && "bg-sky-600") ||
          (Color === "blue" && "bg-blue-600") ||
          (Color === "yellow" && "bg-yellow-600") ||
          (Color === "green" && "bg-green-600") ||
          (Color === "orange" && "bg-orange-600") ||
          (Color === "white" && "bg-white") ||
          (Color === "black" && "bg-black")
        } text-sm text-white`}
      >
        <span>0</span>
      </div>
    </div>
  );
}

export default Ping;
