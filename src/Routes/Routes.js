import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Components/Home/Home';
import Services from '../Components/Services/Services';
import Service from '../Components/Service/Service';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import ServiceLimit from '../Components/ServiceLimit/ServiceLimit';
import AddService from '../Components/AddService/AddService';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>  
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            {
                path: 'servicelimit',
                loader: () => fetch('http://localhost:5000/servicelimit'),
                element: <ServiceLimit></ServiceLimit>
            },
            {
                path: 'addservice',
                element: <PrivateRoute> <AddService></AddService> </PrivateRoute>
            },
            {
                path: '/services/:id',
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <Service></Service>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])
