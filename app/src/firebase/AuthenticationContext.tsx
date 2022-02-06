import React, {createContext, useContext, useState, useEffect, ReactElement} from 'react'
import {auth} from './firebase_config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User, UserCredential} from 'firebase/auth'
import {Navigate, Outlet} from 'react-router-dom'

function registerFunction(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password)
}

function loginFunction(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
}

function logoutFunction(): Promise<void> {
    return signOut(auth)
}


const AuthenticationContext = createContext<{
    activeUser: User | null,
    registerFunction: any,
    loginFunction: any,
    logoutFunction: any,
    NeedAuthentication: any,
    AccessProfileIfAuthenticated: any,
}>({
    "NeedAuthentication": NeedAuthentication,
    "AccessProfileIfAuthenticated": AccessProfileIfAuthenticated,
    "registerFunction": registerFunction,
    "loginFunction": loginFunction,
    "logoutFunction": logoutFunction,
    "activeUser": null
})

export const useAuthentication = () => useContext(AuthenticationContext)

function AccessProfileIfAuthenticated(): ReactElement {
    let {activeUser} = useAuthentication();

    if (activeUser) {
        return <Navigate to="/profile"/>;
    }

    return <Outlet/>;
}

function NeedAuthentication(): ReactElement {
    let {activeUser} = useAuthentication();

    if (activeUser) {
        return <Outlet/>;
    }

    return <Navigate to="/login"/>;
}

export default function AuthInjectionStateManager({children}: any): ReactElement {
    const [activeUser, setActiveUser] = useState<User | null>(null)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setActiveUser(user)
        })
        return () => {
            unsub()
        }
    }, [])

    const value = {activeUser, registerFunction, loginFunction, logoutFunction, NeedAuthentication, AccessProfileIfAuthenticated}


    return <AuthenticationContext.Provider value={value}>
        {children}
    </AuthenticationContext.Provider>
}
