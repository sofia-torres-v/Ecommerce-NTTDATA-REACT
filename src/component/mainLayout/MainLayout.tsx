import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
import "./mainLayout.css";


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