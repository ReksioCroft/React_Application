import React, {createContext, useContext, useState, useEffect} from 'react'
import {auth} from './firebase_config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import {Navigate, Outlet} from 'react-router-dom'
import {User} from 'firebase/auth'


function registerFunction(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
}

function loginFunction(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
}

function logoutFunction() {
    return signOut(auth)
}


const AuthenticationContext = createContext<{
    activeUser: User | null,
    registerFunction: any,
    loginFunction: any,
    logoutFunction: any,
    NeedAuthentication: any
}>({
    "NeedAuthentication": NeedAuthentication,
    "loginFunction": loginFunction,
    "logoutFunction": logoutFunction,
    "registerFunction": registerFunction,
    "activeUser": null
})

export const useAuthentication = () => useContext(AuthenticationContext)

function NeedAuthentication() {
    let {activeUser} = useAuthentication();

    if (activeUser) {
        return <Outlet/>;
    }

    return <Navigate to="/login"/>;
}

export default function AuthInjectionStateManager({children}: any) {
    const [activeUser, setActiveUser] = useState<User | null>(null)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setActiveUser(user)
        })
        return () => {
            unsub()
        }
    }, [])

    const value = {activeUser, registerFunction, loginFunction, logoutFunction, NeedAuthentication}


    return <AuthenticationContext.Provider value={value}>
        {children}
    </AuthenticationContext.Provider>
}