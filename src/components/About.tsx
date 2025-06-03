import { FiX } from "react-icons/fi";

interface AboutProps {
  handleShoutAbout: () => void;
}

const About: React.FC<AboutProps> = ({ handleShoutAbout }) => {
  return (
    <div
      className="
        fixed top-1/2 left-1/2
        transform -translate-x-1/2 -translate-y-1/2
        bg-[#111111] rounded-md shadow-2xl
        p-10 w-[50%] text-center
        flex flex-col items-center justify-center gap-2
      "
    >
      <FiX
        className="text-4xl rounded-full bg-red-300/20 text-red-600 cursor-pointer mb-10"
        onClick={handleShoutAbout}
      />
      <h2 className="text-base font-medium mb-2 text-gray-200">
        Desenvolvido por Gabriell Rossolon
      </h2>
      <a
        href="https://portfolio-2025-cyan-eight.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Portfólio
      </a>
    </div>
  );
};

export default About;
