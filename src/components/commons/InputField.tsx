interface InputFieldProps {
  placeholder: string,
  type: string,
  value?: string | number,
  handleChange?: (value: string) => void,
  span?: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, type, value, handleChange, span }) => {
  return (
    <label className="w-full">
      {span && <span className="text-gray-200/80">{span}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange?.(e.target.value)}
        
        className="border-1 border-gray-100/20 rounded-md px-2 py-1 w-full text-gray-200"
      />
    </label>
  );
};

export default InputField;
