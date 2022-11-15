import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    // loading state
    const [loader, setLoader] = useState(true);
    // user state
    const [user, setUser] = useState(null);
    //  Google provider sign in
    const providerSignIn = provider => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }
    // Log in
    const logIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // Register
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //  Log Out
    const logOut = () => {
        return signOut(auth);
    }
    // For creating user profile photo
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }
    // auth state change observation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
            console.log('observing current user', currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = { user, createUser, logIn, loader, updateUserProfile, logOut, providerSignIn }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;