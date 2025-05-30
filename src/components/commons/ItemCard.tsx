import { FiTrash } from "react-icons/fi";

interface ItemCardProps {
  name: string;
  quantity: number;
  value: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, quantity, value }) => {
  return (
    <div className="grid grid-cols-6 gap-4 p-2 border border-gray-100/20 rounded-xl w-full">
      <p className="border border-gray-100/20 py-1 px-2 rounded-md text-gray-200 bg-[#111111] col-span-3">
        {name}
      </p>
      <p className="border border-gray-100/20 py-1 px-2 rounded-md text-gray-200 bg-[#111111] col-span-1 text-center">
        {quantity}
      </p>
      <p className="border border-gray-100/20 py-1 px-2 rounded-md text-gray-200 bg-[#111111] col-span-1 text-center">
        {value}
      </p>
      <div className="flex items-center justify-center col-span-1 bg-[#111111] rounded-md border border-gray-100/20 cursor-pointer">
        <FiTrash className="text-2xl text-red-300" />
      </div>
    </div>
  );
};

export default ItemCard;
