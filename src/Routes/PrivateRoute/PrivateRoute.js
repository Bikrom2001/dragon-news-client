import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

/* 
1.  only allow authenticated user to visit the router
2.  
3.  Redirect user to the route they wanted to go before login
*/

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    const locaton = useLocation();

    if(loading){
        return <Spinner animation="border" variant="info" />
    }

   if(!user){
    return <Navigate to='/login' state={{from:locaton}} replace></Navigate>
   }
   return children ;
};

export default PrivateRoute;