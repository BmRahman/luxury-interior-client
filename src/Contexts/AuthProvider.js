import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, getIdTokenResult, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'; 
import app from './../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    // create user with mail and password
    const userCreate = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login with mail and password
    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const userLogout = () => {
        setLoader(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return () => unSubscribe;
    }, [])



    const authInfo = {user, userCreate, userLogin, userLogout, loader}
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;