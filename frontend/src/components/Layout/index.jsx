import {Outlet} from "react-router";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SideBar from "./components/SideBar.jsx";


const Layout = () => {
    return (
        <div className="container">

            <Header />

            <div className="flex flex-row">
                <SideBar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout

