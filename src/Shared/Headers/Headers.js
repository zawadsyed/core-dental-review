import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Headers = () => {
    return (
        <div>
            <div className="navbar lg:
            px-80 bg-base-100 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu w-56 rounded-box menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/services'>All Services</NavLink></li>
                            <li><NavLink to='/reviews'>My Reviews</NavLink></li>
                            <li><NavLink to='/reviews'>Add Service</NavLink></li>
                        </ul>
                    </div>
                    <Link to='/'>HAHAH</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 rounded-3xl p-0">
                        <li><NavLink to='/services'>All Services</NavLink></li>
                        <li><NavLink to='/reviews'>My Reviews</NavLink></li>
                        <li><NavLink to='/reviews'>Add Service</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='mr-3'>Login</button>
                    <button className="btn btn-primary">Register</button>
                </div>
            </div>
        </div >
    );
};

export default Headers;