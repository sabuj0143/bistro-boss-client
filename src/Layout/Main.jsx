import { Outlet } from "react-router-dom";
import Footer from "../pages/Sherad/Footer/Footer";
import NavBar from "../pages/Sherad/NavBar/NavBar";

const Main = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;