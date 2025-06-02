import { FiTrash } from "react-icons/fi";

interface ItemCardProps {
  name: string;
  quantity: string;
  value: string;
  onDelete: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, quantity, value, onDelete }) => {
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
      <button
        type="button"
        onClick={onDelete}
        className="flex items-center justify-center col-span-1 bg-[#111111] rounded-md cursor-pointer
        hover:bg-[#222222] transition-colors duration-300 border-1 border-red-400/50"
      >
        <FiTrash className="text-2xl text-red-300" />
      </button>
    </div>
  );
};

export default ItemCard;
