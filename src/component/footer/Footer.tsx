import {FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp} from "react-icons/fa";
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content container">
                <p className="footer__text">Síguenos en redes:</p>
                <div className="footer__social" >
                    <FaWhatsapp className="footer__icon"/>
                    <FaTiktok className="footer__icon"/>
                    <FaInstagram className="footer__icon"/>
                    <FaFacebookF className="footer__icon"/>
                </div>
            </div>
            <p className="footer__copyright">© 2024 Market. Todos los derechos reservados</p>
        </div>
    );
};

export default Footer;
