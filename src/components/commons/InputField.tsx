interface InputFieldProps {
  placeholder: string,
  type: string,
  value?: string | number,
  handleChange?: (value: string) => void,
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, type, value, handleChange }) => {
  return (
    <label className="w-full">
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
