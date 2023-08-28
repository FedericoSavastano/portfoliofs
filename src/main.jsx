import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home, { loader as worksHomeLoader } from './pages/Home.jsx';
import Work, { loader as workLoader } from './pages/Work.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: worksHomeLoader,
            },
            {
                path: '/:workName',
                element: <Work></Work>,
                loader: workLoader,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
