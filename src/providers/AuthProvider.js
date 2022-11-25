import React , {useEffect, useState} from "react";
import { auth } from "../util/firestore";

const AuthContext = React.createContext(undefined);
const AuthDispatchContext = React.createContext(undefined);

const AuthProvider = ({children}) => {

    const [currentUser , setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser);
    } , []);

    return (
        <AuthContext.Provider value={{currentUser}}>
            <AuthDispatchContext.Provider value={setCurrentUser}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext, AuthDispatchContext };