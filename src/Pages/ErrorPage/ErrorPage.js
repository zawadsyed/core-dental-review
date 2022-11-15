import React from 'react';
import img from '../../assets/images/error.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-5xl'>OOPS!!</h1>
            <p>The Page You have been looking for could not found</p>
            <img src={img} alt="" />
            <Link to='/'>
                <button>Back to Homepage</button>
            </Link>
        </div>
    );
};

export default ErrorPage;