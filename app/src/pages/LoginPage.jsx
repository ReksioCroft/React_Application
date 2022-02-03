import PageSchema from '../components/PageSchema'

import Link from '../components/Link'

function LoginPage() {
    return (
        <PageSchema>
            <h1>Login Page</h1>
            <form>
                <label for="email">Email</label>                   <br/>
                <input type="text" id="email" name="email" value="tavic@gmail.com"/><br/>

                <label for="password">Password</label>                    <br/>
                <input type="text" id="password" name="password" value="123456"/> <br/><br/>

                <input type="submit" value="Submit"/>
            </form>

            <Link to='/register' name='Register' />
        </PageSchema>
    )
}

export default LoginPage