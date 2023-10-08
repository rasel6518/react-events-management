import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const googleProvider = new GoogleAuthProvider()

    const CreateUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (value) => {
        return signInWithPopup(auth, googleProvider)
    }

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)


            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authinfo = {
        user,
        loading,
        CreateUser,
        LogOut,
        logIn,
        googleLogin,

    }
    return (
        <AuthContext.Provider value={authinfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;


