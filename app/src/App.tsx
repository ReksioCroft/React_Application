import React from 'react'
import AppRoutes from './components/AppRoutes'
import InjectStateManager from './firebase/AuthenticationContext'


function App() {
    return (
        <InjectStateManager>
            <AppRoutes/>
        </InjectStateManager>
    )
}

export default App;
