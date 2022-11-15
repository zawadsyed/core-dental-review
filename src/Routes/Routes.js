import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import AddServices from '../Pages/AddServices/AddServices';
import Blog from '../Pages/Blog/Blog';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import MyReviews from '../Pages/MyReviews/MyReviews';
import Register from '../Pages/Register/Register';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import Services from '../Pages/Services/Services';
import Update from '../Pages/Update/Update';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://core-dental-review-server.vercel.app/home/services'),
                element: <Home></Home>

            },
            {
                path: '/services',
                element: <Services></Services>

            },
            {
                path: '/services/:id',
                loader: ({ params }) => fetch(`https://core-dental-review-server.vercel.app/services/${params.id}`),
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
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/my-reviews/:id',
                loader: ({ params }) => fetch(`https://core-dental-review-server.vercel.app/my-reviews/${params.id}`),
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
        ]
    }
])


export default router;