import PageSchema from '../components/PageSchema'
import { useAuthentication } from '../firebase/AuthenticationContext'


function MainPage() {
    const { activeUser } = useAuthentication()
    return (
        <PageSchema>
            <h1>Main Page</h1>
                <p>Test</p>
                <p>{`The current user is ${activeUser}`}</p>
        </PageSchema>
    )
}

export default MainPage