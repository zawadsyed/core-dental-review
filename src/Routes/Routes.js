import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            }
        ]
    }
])


export default router;