import Link from "./Link"

function PageSchema(props) {
    return (
        <>
            <Link to='/home' name='Home' />
            <Link to='/login' name='Login' />
            <Link to='/register' name='Register' />
            {props.children}
        </>
    )
}

export default PageSchema