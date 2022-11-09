import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'; 
import app from './../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // create user with mail and password
    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with mail and password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const userLogout = () => {
        return signOut(auth)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => unSubscribe;
    }, [])



    const authInfo = {user, userCreate, userLogin, userLogout}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;