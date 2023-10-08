import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext)

    console.log(user);

    const handleSignOut = () => {
        LogOut()
            .then()
            .catch()
    }

    const NavLinks = <>
        <li><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline mr-5 text-lg font-medium" : " mr-5 text-lg font-medium"
            }
        >HOME</NavLink></li>
        <li><NavLink to='/services'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline mr-5 text-lg font-medium " : "mr-5 text-lg font-medium "
            }
        >SERVICES</NavLink></li>
        {
            user ? <li><NavLink to='/booking'
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active underline mr-5 text-lg font-medium " : " mr-5  text-lg font-medium"
                }
            >BOOKING</NavLink></li>
                : ''
        }
        <li><NavLink to='/blog'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline mr-5 text-lg font-medium " : " mr-5  text-lg font-medium"
            }
        >BLOG</NavLink></li>
        <li><NavLink to='/about'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline mr-5 text-lg font-medium  " : "mr-5 text-lg font-medium "
            }
        >ABOUT</NavLink></li>
        <li><NavLink to='/contact'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active underline  mr-5 text-lg font-medium" : " mr-5 text-lg font-medium "
            }
        >CONTACT</NavLink></li>

        {
            user ? <li><NavLink to='/login' onClick={handleSignOut}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active underline btn  mr-5 text-lg font-medium" : " mr-5 btn text-lg font-medium "
                }
            >SIGNOUT</NavLink></li> :
                <li><NavLink to='/login'
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active underline btn  mr-5 text-lg font-medium" : " mr-5 btn text-lg font-medium "
                    }
                >LOGIN</NavLink></li>
        }


    </>
    return (
        <div>
            <div className="navbar lg:mx-5 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <Link to='/' className=" normal-case text-xl">
                        <img className=" w-36  h-14 " src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                {/* <div className=" mr-10">

                    <Link to='/login' > <button className="btn bg-base-100">LOGIN</button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;