import PageSchema from '../components/PageSchema'

import {makeStyles} from '@mui/styles'
import {Box, Theme} from '@mui/material'
import {Container, Grid} from '@mui/material'


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Avatar} from '@mui/material';
import Typography from '@mui/material/Typography';
import {useAuthentication} from "../firebase/AuthenticationContext";


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
    let {activeUser, articles} = useAuthentication();
    if (activeUser) {
        // alert(JSON.stringify(articles))
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
                        {articles.map((article) => (

                            <Grid item xs={12} sm={4}>
                                <Card sx={{maxWidth: 345}}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={article.image}
                                        alt="rating"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {article.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {article.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={my_classes.cardActions}>
                                        <Box className={my_classes.author}>
                                            <Avatar
                                                src={article.avatar}/>
                                            <Box ml={2}>
                                                <Typography variant="subtitle2" component="p">
                                                    {article.author}
                                                </Typography>
                                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                                    {article.date}
                                                </Typography>
                                            </Box>

                                        </Box>
                                    </CardActions>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>
                </Container>
            </PageSchema>
        )
    } else {
        return (
            <PageSchema>
                <Box className={my_classes.princ}>
                    <Box>
                        <Typography variant="h3" component="div" className={my_classes.blogTitle} sx={{flexGrow: 1}}>
                            Task manager
                        </Typography>
                    </Box>
                </Box>
            </PageSchema>
        )
    }
}

export default MainPage
