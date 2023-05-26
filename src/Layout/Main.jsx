import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Sherad/Footer/Footer";
import NavBar from "../pages/Sherad/NavBar/NavBar";

const Main = () => {

    const location = useLocation();
    const noHeaderFOoter = location.pathname.includes("login") || location.pathname.includes("register")

    return (
        <>
            {noHeaderFOoter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFOoter || <Footer></Footer>}
        </>
    );
};

export default Main;