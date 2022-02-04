import { createContext, useContext, useState } from 'react'
import { auth } from './firebase_config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth' 


function registerFunction(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

function loginFunction(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

const AuthenticationContext = createContext({})

export const useAuthentication = () => useContext(AuthenticationContext)

export default function AuthInjection({ children }) {
    const [activeUser] = useState(null)

    const value = { activeUser, registerFunction, loginFunction }

    return <AuthenticationContext.Provider value={value}>
        {children}
    </AuthenticationContext.Provider>
}