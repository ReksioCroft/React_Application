import PageSchema from '../components/PageSchema'
import Link from '../components/Link'
import { useAuthentication } from '../firebase/AuthenticationContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const sail = useNavigate()
    const { loginFunction } = useAuthentication()

    return (
        <PageSchema>
            <h1>Login Page</h1>
            <form onSubmit={ async e => {
            e.preventDefault()
            loginFunction(email, password)
            .then((response) => sail('/profile'))
            .catch((error) => { 
                console.log(error.message)
                alert(error.message)
            }) 
            }}>
                <label htmlFor="email">Email</label>                   <br/>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" name="email" placeholder="tavic@gmail.com"/><br/>

                <label htmlFor="password">Password</label>                    <br/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="text" id="password" name="password" placeholder="1234567"/> <br/><br/>

                <input type="submit" value="Submit"/>
            </form>

            <Link to='/register' name='Register' />
        </PageSchema>
    )
}

export default LoginPage