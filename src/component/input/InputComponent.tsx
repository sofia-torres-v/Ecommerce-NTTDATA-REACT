import { FC } from 'react';
import './input.css'

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: React.ReactNode;
  className?: string;
  type?: string;
  iconClassName?: string
  onBlur?: () => void; 
}

const InputComponent: FC<InputProps> = ({ value, onChange, placeholder, icon, className, type = "text", iconClassName }) => {
  return (
    <div className="input-category">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        />
        {icon && <div className={iconClassName} data-testid="icon-search">{icon}</div>}
    </div>
  );
};

export default InputComponent;