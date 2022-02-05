import React from 'react'
import AppRoutes from './components/AppRoutes'
import AuthInjection from './firebase/AuthenticationContext'


function App() {
  return (
      <AuthInjection>
        <AppRoutes/>
      </AuthInjection>
  )
}

export default App;
