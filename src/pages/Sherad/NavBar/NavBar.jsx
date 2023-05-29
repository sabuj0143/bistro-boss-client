import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        <li><Link to="/secret">Secret</Link></li>

        <li>
            <Link to="/dashboard/myCart">
                <button className="flex items-center gap-2">
                    <FaShoppingCart className="text-3xl" />
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>

    </>

    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl p-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="text-center items-center pl-4">
                        <a className=" text-[#FFFFFF] normal-case text-2xl font-extrabold">Bistro <span className="text-[#FCCB05]">Boss</span></a>
                        <p className="monospace  text-[#FFFFFF] font-bold text-2xl"><span className="text-[#FCCB05] text-3xl">R</span>estaurant</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {user ? <>



                    <div className="navbar-end">
                        <span className="mr-4">{user?.displayName}</span>
                        <a onClick={handleLogOut} className="btn btn-outline btn-warning">LogOut</a>
                    </div>
                </> : <>
                    <div className="navbar-end">
                        <Link to="/login">
                            <a className="btn btn-outline btn-warning">Login</a>
                        </Link>
                    </div>
                </>}
            </div>
        </div>
    );
};

export default NavBar;