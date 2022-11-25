import React, { useContext } from 'react'
import { Navigate , Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider'

function PrivateRoute() {
  
    const {currentUser} = useContext(AuthContext);
    
    return currentUser ? <Outlet /> : <Navigate to="/auth/login" />;


}

export default PrivateRoute