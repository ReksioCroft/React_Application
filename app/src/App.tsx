import React from 'react'
import AppRoutes from './components/AppRoutes'
import AuthInjectionStateManager from './firebase/AuthenticationContext'


function App() {
    return (
        <AuthInjectionStateManager>
            <AppRoutes/>
        </AuthInjectionStateManager>
    )
}

export default App;
