import { useAuthentication } from "../firebase/AuthenticationContext"
import Link from "./Link"

function PageSchema(props) {

    const { logoutFunction } = useAuthentication()
    return (
        <>
            <Link to='/home' name='Home' />
            <Link to='/login' name='Login' />
            <Link to='/register' name='Register' />
            <Link to='/profile' name='Profile' />
            <button onClick={e => {
                e.preventDefault()
                // handle logout
                alert("V-ati delogat")
                logoutFunction()

              }}>
                  Logout
            </button>
            {props.children}
        </>
    )
}

export default PageSchema