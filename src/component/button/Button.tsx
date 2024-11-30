import { FC } from "react";

interface ButtonProps {
    label?: string; 
    icon?: React.ReactNode;
    onClick: () => void;
    className?: string;
  }
  
  const Button: FC<ButtonProps> = ({ label,  onClick, icon, className }) => {
    return (
      <button
        className={className}
        onClick={onClick}
      >
        {label && <span className="label">{label}</span>}
        {icon && <span className="button__icon">{icon}</span>}
      </button>
    );
  };
export default Button;  