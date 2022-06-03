import React from 'react';
import logo from "../../images/mirror.png"
const Navbar = () => {
    const Menu =
        <>
            <li className='hover:text-primary'><a href="/">Home</a></li>
            <li className='hover:text-primary'><a href="/">Features</a></li>
            <li className='hover:text-primary'><a href="/">Pricing</a></li>
            <li className='hover:text-primary'><a href="/">Blog</a></li>
            <li className='hover:text-primary'><a href="/">About</a></li>
            <li className='hover:text-primary'><a href="/">Contact</a></li>
        </>
    return (
        <div className='sticky top-0 z-10 bg-white'>
            <div className="navbar bg-base-100 w-4/5 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {Menu}
                        </ul>
                    </div>
                    <div className="normal-case text-2xl flex justify-center items-center">
                        <img className='h-14' src={logo} alt="" />
                        <p>Mirror</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {Menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <h1>Sign In</h1>
                    <p className='mx-1'>/</p>
                    <h1>Sign Up</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;