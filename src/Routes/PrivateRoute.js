import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    
    if(loader){
        return <div className='w-full lg:w-4/5 mx-auto text-center'>
            <div className="radial-progress text-primary" style={{"--value":80}}>80%</div>
        </div>
    }

    if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;