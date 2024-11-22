import {IoIosSearch} from "react-icons/io";
import "./inputCategory.css";

const InputCategory = () => {
    return (
        <>
            <div className="box-input-search">
                <input id="search" type="search" placeholder="Buscar productos..." />
                <IoIosSearch className="icon-search" />
            </div>
        </>
    );
};

export default InputCategory;
