import { FC } from 'react';
import './input.css'

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: React.ReactNode;
  className?: string;
}

const InputComponent: FC<InputProps> = ({ value, onChange, placeholder, icon, className }) => {
  return (
    <div className="input-category">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        />
        {icon && <div className="input-category__icon" data-testid="icon-search">{icon}</div>}
    </div>
  );
};

export default InputComponent;