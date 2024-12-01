import { FC } from "react";

interface ButtonProps {
  label?: string; 
  icon?: React.ReactNode;
  onClick: () => void;
  className?: string;
  'data-testid'?: string; 
}

const Button: FC<ButtonProps> = ({ label, onClick, icon, className, 'data-testid': testId }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      data-testid={testId} 
    >
      {label && <span className="label">{label}</span>}
      {icon && <span className="button__icon">{icon}</span>}
    </button>
  );
};

export default Button;
