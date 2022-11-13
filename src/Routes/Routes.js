import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import AddServices from '../Pages/AddServices/AddServices';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import MyReviews from '../Pages/MyReviews/MyReviews';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import Services from '../Pages/Services/Services';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/home/services'),
                element: <Home></Home>

            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>

            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails></ServiceDetails>

            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/login',
                element: <LogIn></LogIn>

            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>

            },
            {
                path: '/add-services',
                element: <PrivateRoute><AddServices></AddServices>
                </PrivateRoute>
            }
        ]
    }
])


export default router;