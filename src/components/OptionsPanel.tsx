import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

interface OptionsPanelProps {
  handleShowOptions: () => void;
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({ handleShowOptions }) => {
  return (
    <motion.div
      className="fixed left-0 top-0 h-screen z-50"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-start justify-center h-full">
        <div className="flex flex-col items-center justify-between bg-[#111111] h-full shadow-[8px_0_16px_rgba(0,0,0,0.2)]">
          <h1 className="text-center font-bold text-3xl px-2 py-2 tracking-widest text-gray-200">
            Orçamento{" "}
            <strong className="text-red-700">
              <br />
              Fácil
            </strong>
          </h1>
          <div className="flex flex-col items-center justify-center">
            <button className="border-b-1 border-gray-200/10 w-full p-2 cursor-pointer text-xl text-gray-200">
              Inicio
            </button>
            <button className="border-b-1 border-gray-200/10 w-full p-2 cursor-pointer text-xl text-gray-200">
              Fazer Orçamento
            </button>
            <button className="border-b-1 border-gray-200/10 w-full p-2 cursor-pointer text-xl text-gray-200">
              Sair
            </button>
          </div>
          <div className="bg-[#111111] w-full border-t-1 border-gray-200/30">
            <p className="text-gray-100/40 text-sm text-center py-1">
              © All rights reserved
            </p>
          </div>
        </div>
        <button
          className="bg-[#111111] py-32 pr-1 rounded-r-full cursor-pointer shadow-[8px_0_16px_rgba(0,0,0,0.2)]"
          onClick={() => handleShowOptions()}
        >
          <FaArrowLeft className="text-5xl text-gray-200" />
        </button>
      </div>
    </motion.div>
  );
};

export default OptionsPanel;
