import React, {createContext, useContext, useState, useEffect, ReactElement} from 'react'
import {auth, realtime_db} from './firebase_config'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User, UserCredential} from 'firebase/auth'
import {Navigate, Outlet} from 'react-router-dom'
import {child, push, ref, ThenableReference, onValue} from "firebase/database";

function registerFunction(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password)
}

function loginFunction(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
}

function logoutFunction(): Promise<void> {
    return signOut(auth)
}


function pushArticle(activeUser: User, article: JSON): ThenableReference {
    const dbRef = ref(realtime_db);

    if (activeUser) {
        return push(child(child(dbRef, 'users'), activeUser.uid), article)
    } else
        throw new Error("User is not authenticated")
}

const AuthenticationContext = createContext<{
    activeUser: User | null,
    articles: any[]
    registerFunction: any,
    loginFunction: any,
    logoutFunction: any,
    pushArticle: any,
    NeedAuthentication: any,
    AccessProfileIfAuthenticated: any,
}>({
    NeedAuthentication: NeedAuthentication,
    AccessProfileIfAuthenticated: AccessProfileIfAuthenticated,
    registerFunction: registerFunction,
    loginFunction: loginFunction,
    logoutFunction: logoutFunction,
    articles: [],
    pushArticle: pushArticle,
    activeUser: null
})

export const useAuthentication = () => useContext(AuthenticationContext)

function AccessProfileIfAuthenticated(): ReactElement {
    let {activeUser} = useAuthentication();

    if (activeUser) {
        return <Navigate to="/home"/>;
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

export default function InjectStateManager({children}: any): ReactElement {
    const [activeUser, setActiveUser] = useState<User | null>(null)
    const [articles, setArticles] = useState<any[]>([])


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            setActiveUser(user)
        })
        return () => {
            unsub()
        }
    }, [])

    useEffect(() => {
        const unsub = onValue(ref(realtime_db, 'users/'), (snapshot) => {
            const json_obj_users = snapshot.val()
            let articles = []
            for (var user_key in json_obj_users) {
                for (var article in json_obj_users[user_key]) {
                    articles.push(json_obj_users[user_key][article])
                }
            }
            setArticles(articles)
        })
        return () => {
            unsub()
        }
    })

    const value = {activeUser, articles, registerFunction, loginFunction, logoutFunction, NeedAuthentication, AccessProfileIfAuthenticated, pushArticle}


    return <AuthenticationContext.Provider value={value}>
        {children}
    </AuthenticationContext.Provider>
}
