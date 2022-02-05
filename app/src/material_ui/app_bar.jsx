import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Link from "../components/Link"
import {useAuthentication} from "../firebase/AuthenticationContext"


export default function AppBarPers() {

    const {activeUser, logoutFunction} = useAuthentication()

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar colors="primary">
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Link to='/home' name='Home'/>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow: 20}}>
                        {activeUser && <Link to='/profile' name='Profile'/>}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {!activeUser && <Link to='/login' name='Login'/>}
                    </Typography>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {!activeUser && <Link to='/register' name='Register'/>}
                    </Typography>

                    {activeUser &&
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={e => {
                                e.preventDefault()
                                // handle logout
                                alert("V-ati delogat")
                                logoutFunction()

                            }}

                        >
                            <AccountCircleIcon sx={{mr: 0.5}}/>
                            Logout
                        </IconButton>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}