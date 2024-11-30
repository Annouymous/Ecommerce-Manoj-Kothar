import { RxCross2 } from 'react-icons/rx';  // Assuming you're importing this icon

type SizeItem = {
  code: string;
};

type SizeSelectorProps = {
  items?: SizeItem[];  
  onClick?: (item: SizeItem) => void; 
};

function SizeSelector({
  items = [],
  onClick = () => {},
}: SizeSelectorProps) {
  return (
    <div className="flex-wrap flex flex-row gap-4">
      {items.map((item) => (
        <div
          key={item.code} 
          className="group relative border rounded-md border-gray-200"
        >
          <button
            onClick={() => onClick(item)} 
            className="absolute right-[-15px] top-[-10px] opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <RxCross2 className="text-red-600 stroke-current stroke-2" />
          </button>
          <div className="font-medium text-gray-700 text-sm m-2 w-16 items-center flex justify-center">
            {item.code}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SizeSelector;
