import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProfilePage from '../pages/ProfilePage'
import {useAuthentication} from '../firebase/AuthenticationContext'
import CreateArticlePage from "../pages/CreateArticlePage";


function AppRoutes() {

    const {NeedAuthentication, AccessProfileIfAuthenticated} = useAuthentication()

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/home" element={<MainPage/>}/>
                    <Route element={<AccessProfileIfAuthenticated/>}>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Route>
                    <Route element={<AccessProfileIfAuthenticated/>}>
                        <Route path="/register" element={<RegisterPage/>}/>
                    </Route>
                    <Route element={<NeedAuthentication/>}>
                        <Route path="/profile" element={<ProfilePage/>}/>
                    </Route>
                    <Route element={<NeedAuthentication/>}>
                        <Route path="/post_article" element={<CreateArticlePage/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
