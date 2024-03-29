import { Outlet } from "react-router-dom";
import Navbar from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Layout(){
    return(
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}
export default Layout;