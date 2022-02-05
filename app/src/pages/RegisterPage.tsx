import PageSchema from '../components/PageSchema'
import {useAuthentication} from '../firebase/AuthenticationContext'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


function RegisterPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const sail = useNavigate()
    const {registerFunction} = useAuthentication()

    return (
        <PageSchema>

            <br/>

            <Box mb={2}>
                <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                    Register Page
                </Typography>
            </Box>

            <form onSubmit={async e => {
                e.preventDefault()
                registerFunction(email, password)
                    .then((response) => sail('/profile'))
                    .catch((error) => {
                        console.log(error.message)
                        alert(error.message)
                    })
            }}>
                <Box>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <label htmlFor="email">Email</label> <br/>
                    </Typography>
                </Box>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" id="email" name="email" placeholder='tavic@gmail.com'/><br/>

                <Box>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <label htmlFor="password">Password</label> <br/>
                    </Typography>
                </Box>
                <input value={password} onChange={e => setPassword(e.target.value)} type="text" id="password" name="password" placeholder='1234567'/> <br/><br/>

                <Button style={{borderRadius: 35}} variant="contained" type="submit">Submit</Button>
            </form>

            <br/>
            <Button style={{borderRadius: 35, backgroundColor: "#21b6ae"}} variant="contained" href="/login" mt={2}>Login</Button>


        </PageSchema>
    )
}

export default RegisterPage