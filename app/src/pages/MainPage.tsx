import PageSchema from '../components/PageSchema'

import {makeStyles} from '@mui/styles'
import {Box, Theme} from '@mui/material'
import {Container, Grid} from '@mui/material'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Avatar} from '@mui/material';
import {GetArticles} from "../firebase/firebase_db"
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme: Theme) => ({
    princ: {
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60')",
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        marginTop: "10px"
    },
    blog: {
        paddingTop: theme.spacing(3)
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3)
    },
    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },
    author: {
        display: "flex"
    }
}))


function MainPage() {

    const my_classes = useStyles()
    GetArticles();
    return (
        <PageSchema>
            <Box className={my_classes.princ}>
                <Box>
                    <Typography variant="h3" component="div" className={my_classes.blogTitle} sx={{flexGrow: 1}}>
                        Task manager
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="lg" className={my_classes.blog}>
                <Grid container spacing={10}>

                    <Grid item xs={12} sm={4}>
                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://media.istockphoto.com/photos/close-up-on-customer-man-hand-pressing-on-smartphone-screen-with-five-picture-id1303530194?s=612x612"
                                alt="rating"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Rate aplication feature
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    The React Rating UI component allows users to leave a rating in a digestible, visual way.
                                    It enables React applications to display rating values that users can choose and update through the component's interface.
                                    We should use that too!
                                </Typography>
                            </CardContent>
                            <CardActions className={my_classes.cardActions}>
                                <Box className={my_classes.author}>
                                    <Avatar
                                        src="https://media.istockphoto.com/photos/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-picture-id1171169127?s=612x612"/>
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Octavian "Junior" Staicu
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            Feb 5, 2022
                                        </Typography>
                                    </Box>

                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item xs={12} sm={4}>
                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://images.unsplash.com/photo-1590613607026-15c463e30ca5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlY3VyaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                                alt="rating"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Security by using Google
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    To prevent unauthorized access, Advanced Protection only allows Google apps
                                    and verified third-party apps to access your Google Account data, and only with your permission.
                                    We must add Advanced Protection to our security.
                                </Typography>
                            </CardContent>
                            <CardActions className={my_classes.cardActions}>
                                <Box className={my_classes.author}>
                                    <Avatar
                                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"/>
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Stefan "Fanica" Belvedere
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            Feb 4, 2022
                                        </Typography>
                                    </Box>

                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card sx={{maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/LoremIpsumDesign.png/800px-LoremIpsumDesign.png"
                                alt="rating"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lorem ipsum
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                            <CardActions className={my_classes.cardActions}>
                                <Box className={my_classes.author}>
                                    <Avatar
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gaudeamus_igitur_1898.jpg/800px-Gaudeamus_igitur_1898.jpg"/>
                                    <Box ml={2}>
                                        <Typography variant="subtitle2" component="p">
                                            Gaudeamus Igitur
                                        </Typography>
                                        <Typography variant="subtitle2" color="textSecondary" component="p">
                                            Feb 3, 2022
                                        </Typography>
                                    </Box>

                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>

                    </Grid>
                </Grid>
            </Container>
        </PageSchema>
    )
}

export default MainPage
