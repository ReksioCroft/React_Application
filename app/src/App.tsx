import React from 'react'
import AppRoutes from './components/AppRoutes'
import AuthInjection_StateManager from './firebase/AuthenticationContext'


function App() {
  return (
      <AuthInjection_StateManager>
        <AppRoutes/>
      </AuthInjection_StateManager>
  )
}

export default App;
