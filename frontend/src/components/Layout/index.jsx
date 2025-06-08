import {Outlet} from "react-router";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/SideBar.jsx";


const Layout = () => {
    return (
        <div className="container">
            <Header />
            <div className="mainContainer">
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout

