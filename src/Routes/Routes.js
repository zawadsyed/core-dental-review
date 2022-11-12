import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../Pages/Home/Home';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import Services from '../Pages/Services/Services';

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

            }
        ]
    }
])


export default router;