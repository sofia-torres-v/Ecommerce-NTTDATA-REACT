import { FC } from "react";
import "./input.css";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  icon?: React.ReactNode;
  className?: string;
  placeholder?: string; 
}

const Input: FC<InputProps> = ({ value, onChange, icon }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-category">
      <input
        className="input-category__input"
        type="text"
        placeholder="Buscar productos..."
        value={value}
        onChange={handleChange}
      />
      {icon && <div className="input-category__icon">{icon}</div>}
    </div>
  );
};

export default Input;
