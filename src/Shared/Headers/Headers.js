import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Headers = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar lg:px-80 bg-base-100 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu w-56 rounded-box menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {/* <li>{user.uid &&
                                <img src={user.photoURL} alt="" />
                            }</li>
                            <li>{user.uid &&
                                <p>{user.displayName}</p>
                            }</li> */}
                            <li><NavLink to='/services'>All Services</NavLink></li>
                            <li><NavLink to='/reviews'>My Reviews</NavLink></li>
                            <li><NavLink to='/reviews'>Add Service</NavLink></li>
                            {
                                user?.uid
                                    ?
                                    <button onClick={handleLogOut} className="btn btn-outline mr-3">Log Out</button>
                                    :
                                    <div className="navbar-end mt-4">
                                        <Link to='/login'><button className="btn btn-outline mr-3">Log In</button></Link>
                                        <Link to='/register'><button className="btn btn-primary mt-2">Register</button></Link>
                                    </div>
                            }

                        </ul>

                    </div>
                    <Link to='/'>HAHAH</Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="flex gap-6 rounded-3xl p-0">
                        <li><NavLink to='/services'>All Services</NavLink></li>
                        <li><NavLink to='/my-reviews'>My Reviews</NavLink></li>
                        <li><NavLink to='/add-services'>Add Service</NavLink></li>
                    </ul>
                    <div className='flex items-center ml-24'>
                        {
                            user?.uid
                                ?
                                <div>
                                    <button onClick={handleLogOut} className="btn btn-outline mr-3">Log Out</button>
                                </div>
                                :
                                <div>
                                    <Link to='/login'><button className="btn btn-outline mr-3">Log In</button></Link>
                                    <Link to='/register'><button className="btn btn-primary">Register</button></Link>
                                </div>
                        }
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Headers;