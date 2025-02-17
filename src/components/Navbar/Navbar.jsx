import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const li = <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
    </>
    return (
        <div className='my-6 w-11/12 mx-auto font-poppins'>
            <div className="navbar !p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {li}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 font-medium text-lg text-zinc-500">
                        {li}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <Link className="px-6 py-2 rounded bg-zinc-700 text-white flex items-center gap-4" onClick={handleSignOut}><FaCircleUser className='text-lg' /> Sign Out</Link>
                            :
                            <Link className="px-6 py-2 rounded bg-zinc-700 text-white flex items-center gap-4" to="/login"><FaCircleUser className='text-lg' /> Login</Link>

                    }

                </div>
            </div>
        </div >
    );
};

Navbar.propTypes = {

};

export default Navbar;