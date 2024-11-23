import {FC} from "react";
import "./button.css";

interface ButtonProps {
    label: string;
    onClick: () => void; 
    icon?: React.ReactNode; 
    className?: string; 
}

const Button: FC<ButtonProps> = ({label, onClick, icon, className}) => (
    <button className={`button ${className}`} onClick={onClick}>
        {label}
        {icon && <span className="button__icon">{icon}</span>}
    </button>
);

export default Button;
