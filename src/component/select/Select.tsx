import { FC } from "react";
import './select.css'

interface SelectProps {
  options: string[];        
  value: string | null;      
  onChange: (value: string) => void; 
  className?: string;
  placeholder?: string; 
  error?: string;
}

const Select: FC<SelectProps> = ({ options, value, onChange, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select className="select-category" value={value || ""} onChange={handleChange}>
      {placeholder && <option value="" disabled>{placeholder}</option>} 
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
