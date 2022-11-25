import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthDispatchContext } from '../providers/AuthProvider';
import { auth , db } from '../util/firestore';
import { useDispatch } from 'react-redux'
import { _setCurrentUser , setCurrentUserDoc } from '../redux/user/userSlice';

import {collection , query, where, getDocs} from "firebase/firestore"; 


function Loader() {

    const setCurrentUser = useContext(AuthDispatchContext);
    const navigate = useNavigate();
    const dispatch = useDispatch()
  
    useEffect(() => {
        auth.onAuthStateChanged( async(user) => {
            if(!user){
                navigate('/auth/login');
            }else{
                setCurrentUser(user);
                dispatch(_setCurrentUser(user))

                // get the user doc data
                const userRef = collection(db, "users");
                const q = query(userRef, where("email", "==", user.email));
                const querySnapshot = await getDocs(q);

                querySnapshot.forEach(user => {
                    console.log(user.data());
                    dispatch(setCurrentUserDoc( user.data() ));
                });

                navigate('/app');
            }
        });
    });
  
  
    return (
        <></>
    )
}

export default Loader