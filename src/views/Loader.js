import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthDispatchContext } from '../providers/AuthProvider';
import { auth } from '../util/firestore';

function Loader() {

    const setCurrentUser = useContext(AuthDispatchContext);
    const {currentUser} = useContext(AuthContext);
    const navigate = useNavigate(); 
  
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(!user){
                navigate('/auth/login');
            }else{
                console.log(user);
                setCurrentUser(user);
                navigate('/app');
            }
        });
    });
  
  
    return (
        <div>

        </div>
    )
}

export default Loader