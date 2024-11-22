import {Outlet} from "react-router-dom";
import "./mainLayout.css";
import Nav from "../../../shared/component/navbar/Nav";
import Footer from "../../../shared/component/footer/Footer";

const MainLayout = () => {
    return (
        <>
            <header className="header">
                <Nav />
            </header>
            <main>
                <section className="container">
                    <Outlet />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;
