import { useAuthentication } from '../firebase/AuthenticationContext'
import PageSchema from '../components/PageSchema'

function ProfilePage() {

    const { activeUser } = useAuthentication()
    
    return (
         <PageSchema>
            <h1>Pagina de profil</h1>
            <p>Informatii: { JSON.stringify(activeUser, null, 2)}</p>
         </PageSchema>
    )
}

export default ProfilePage