import {Outlet} from "react-router-dom";
import "./mainLayout.css";
import Nav from "../../../shared/component/navbar/Nav";
import Footer from "../../../shared/component/footer/Footer";

const MainLayout = () => {
    return (
        <>
            <header className="main-layout__header">
                <Nav />
            </header>
            <main className="main-layout__main">
                <section className="container">
                    <Outlet />
                </section>
            </main>
            <footer className="main-layout__footer">
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;
