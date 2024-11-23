import {IoIosSearch} from "react-icons/io";
import "./inputCategory.css";

const InputCategory = () => {
    return (
        <>
            <div className="input-category">
                <input className="input-category__input" id="search" type="search" placeholder="Buscar productos..." />
                <IoIosSearch className="input-category__icon" />
            </div>
        </>
    );
};

export default InputCategory;
