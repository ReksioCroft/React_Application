import PageSchema from '../components/PageSchema'
import {useAuthentication} from '../firebase/AuthenticationContext'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

function CreateArticlePage(): JSX.Element {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')
    const [avatar, setAvatar] = useState('')
    const sail = useNavigate()
    let {activeUser, pushArticle} = useAuthentication();

    if (activeUser) {
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

                    if (activeUser) {
                        let article: any = {}
                        article["image"] = image
                        article["title"] = title
                        article["content"] = content
                        article["avatar"] = avatar
                        article["author"] = activeUser.email
                        var today = new Date()
                        article["date"] = today.toLocaleString('default', {year: "numeric", month: 'long', day: "2-digit"})
                        pushArticle(activeUser, article).then(() => sail('/home'))
                            .catch((error: any) => {
                                console.log(error.message)
                                alert(error.message)
                            })
                    }
                }}>

                    <Box>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <label htmlFor="title">Title</label> <br/>
                        </Typography>
                    </Box>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" id="title" name="title" placeholder="article title"/><br/>


                    <Box>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <label htmlFor="content">Content</label> <br/>
                        </Typography>
                    </Box>
                    <textarea value={content} onChange={e => setContent(e.target.value)} id="content" name="content" placeholder="article content"/> <br/>

                    <Box>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <label htmlFor="image">Article Image</label> <br/>
                        </Typography>
                    </Box>
                    <input value={image} onChange={e => setImage(e.target.value)} type="url" id="image" name="image" placeholder="link"/> <br/>

                    <Box>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            <label htmlFor="avatar">Avatar Image</label> <br/>
                        </Typography>
                    </Box>
                    <input value={avatar} onChange={e => setAvatar(e.target.value)} type="url" id="avatar" name="avatar" placeholder="link"/> <br/><br/>


                    <Button style={{borderRadius: 35}} variant="contained" type="submit">Submit</Button>
                </form>

                <br/>
                <Button style={{borderRadius: 35, backgroundColor: "#21b6ae"}} variant="contained" href="/register">Register</Button>

            </PageSchema>

        )
    } else {
        return (<PageSchema/>)
    }
}

export default CreateArticlePage
