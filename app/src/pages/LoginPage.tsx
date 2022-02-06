import PageSchema from '../components/PageSchema'
import {useAuthentication} from '../firebase/AuthenticationContext'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const sail = useNavigate()
    const {loginFunction} = useAuthentication()


    return (
        <PageSchema>

            <br/>

            <Box mb={2}>
                <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                    Login Page
                </Typography>
            </Box>

            <form onSubmit={async e => {
                e.preventDefault()
                loginFunction(email, password)
                    .then(() => sail('/profile'))
                    .catch((error: any) => {
                        console.log(error.message)
                        alert(error.message)
                    })
            }}>

                <Box>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <label htmlFor="email">Email</label> <br/>
                    </Typography>
                </Box>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" name="email" placeholder="tavic@gmail.com"/><br/>


                <Box>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <label htmlFor="password">Password</label> <br/>
                    </Typography>
                </Box>
                <input value={password} onChange={e => setPassword(e.target.value)} type="text" id="password" name="password" placeholder="1234567"/> <br/><br/>

                <Button style={{borderRadius: 35}} variant="contained" type="submit">Submit</Button>
            </form>

            <br/>
            <Button style={{borderRadius: 35, backgroundColor: "#21b6ae"}} variant="contained" href="/register">Register</Button>

        </PageSchema>

    )
}

export default LoginPage
