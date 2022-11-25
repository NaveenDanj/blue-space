import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthDispatchContext } from '../providers/AuthProvider';
import { auth } from '../util/firestore';
import { useSelector, useDispatch } from 'react-redux'
import { _setCurrentUser } from '../redux/user/userSlice';


function Loader() {

    const setCurrentUser = useContext(AuthDispatchContext);
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(!user){
                navigate('/auth/login');
            }else{
                setCurrentUser(user);
                dispatch(_setCurrentUser(user))
                navigate('/app');
            }
        });
    });
  
  
    return (
        <></>
    )
}

export default Loader