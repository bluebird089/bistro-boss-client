import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {})
            .catch((error) => {
                console.log(error);
            });
    };

    const navOptions = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
                <NavLink to="/order/salad">Order</NavLink>
            </li>
            <li>
                <button className="btn btn-sm">
                    <FaShoppingCart className="text-white" />
                    <div className="badge badge-secondary">+{cart?.length}</div>
                </button>
            </li>
            {user ? (
                <>
                    <li>
                        <button onClick={handleLogOut}>Log Out</button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <NavLink to="/login">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar fixed z-10 bg-opacity-40 text-white bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navOptions}
                    </ul>
                </div>
                <a className="text-xl text-white">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navOptions}</ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;
