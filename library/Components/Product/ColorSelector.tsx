import { colors } from "@/constant/types";
import React from "react";

// Define the type for items in 'colors'
type ColorItem = {
  name: string;
  code: string;
};

type ColorSelectorProps = {
  ProductBorderColors?: string[]; // Should be an array of strings, not an empty array
  HandleProductBorderColors?: (item: ColorItem) => void; // Should receive a 'ColorItem'
};

function ColorSelector({
  HandleProductBorderColors = () => {}, // Default to an empty function if not provided
  ProductBorderColors = [], // Default to an empty array if not provided
}: ColorSelectorProps) {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {colors.map((item: ColorItem) => (
        <button
          key={item.name}
          onClick={() => HandleProductBorderColors(item)} // Use 'item' which has 'name' and 'code'
          className={`cursor-pointer rounded-md border-[1px] border-gray-300 bg-white shadow-inner transition-all`}
        >
          <div
            style={{ backgroundColor: item.code }}
            className="m-2 size-16 rounded-full shadow-lg"
          />
          <div
            className={`${
              ProductBorderColors.includes(item.code)
                ? "bg-sky-500 text-white"
                : "bg-white"
            } border-t-[1px] border-t-gray-200 px-3 py-1 text-[10px] capitalize text-gray-500`}
          >
            {item.name}
          </div>
        </button>
      ))}
    </div>
  );
}

export default ColorSelector;
