import React, { FC } from "react";
import "./input.css";

interface InputProps {
  value: string | number;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // evento completo
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
  error?: string;
}


const Input: FC<InputProps> = ({ name, value, onChange, placeholder, className, icon, error }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event); // Pasar el evento a onChange
  };

  return (
    <div className="input-category">
      <input
        className={`input-category__input ${className}`} // Corrección aquí
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {icon && <div className="input-category__icon">{icon}</div>}
      {error && <span className="input-category__error">{error}</span>}
    </div>
  );
};

export default Input;
