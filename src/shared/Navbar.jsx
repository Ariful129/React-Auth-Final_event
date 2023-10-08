import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import userpic from '../../src/assets/user.png'


const Navbar = () => {
    //Footer
    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    //from Cntex API
    const { user, logOut } = useContext(AuthContex);
    console.log(user)

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><button onClick={scrollToFooter}>Footer</button></li>
        {user && <>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
        </>}


    </>

    const handleSignOut = () => {
        logOut()
            .then(res => {
                console.log('Logout Successful', res)
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (

        <div className="navbar bg-[#4caf50] rounded-xl mt-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl md:text-2xl italic text-white bg-black rounded-full">eVentLab</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <span className="mr-2 text-white">{user.displayName}</span>
                }
                {user && <label tabIndex={0} className="btn btn-sm btn-circle avatar mr-2">
                    <div className="w-10 rounded-full">
                        <img src={userpic} />
                    </div>
                </label>

                }
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-sm">SignOut</button>
                        :
                        <Link to="/login">
                            <button className="btn btn-sm">Login</button>
                        </Link>

                }

            </div>
        </div>

    );
};

export default Navbar;