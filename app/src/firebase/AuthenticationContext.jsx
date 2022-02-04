import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from './firebase_config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth' 
import { Navigate, Outlet } from 'react-router-dom'


function registerFunction(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

function loginFunction(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

function logoutFunction() {
    return signOut(auth)
}



const AuthenticationContext = createContext({})

export const useAuthentication = () => useContext(AuthenticationContext)

function NeedAuthentication() {
    let { activeUser } = useAuthentication();
  
    if (activeUser) {
        return <Outlet />;
    }
  
    return <Navigate to="/login" />;
  }

export default function AuthInjection({ children }) {
    const [activeUser, setActiveUser] = useState(null)

    useEffect(() => { const unsub = onAuthStateChanged(auth, user => { setActiveUser(user)})
        return () => { unsub() }
      }, [])

    const value = { activeUser, registerFunction, loginFunction, logoutFunction, NeedAuthentication }


    return <AuthenticationContext.Provider value={value}>
        {children}
    </AuthenticationContext.Provider>
}