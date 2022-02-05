import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MainPage from '../pages/MainPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProfilePage from '../pages/ProfilePage'
import {useAuthentication} from '../firebase/AuthenticationContext'


function AppRoutes() {

    const {NeedAuthentication} = useAuthentication()

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/home" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route element={<NeedAuthentication/>}>
                        <Route path="/profile" element={<ProfilePage/>}/>
                    </Route>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}


export default AppRoutes