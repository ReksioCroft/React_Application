import PageSchema from '../components/PageSchema'
import Link from '../components/Link'

function RegisterPage() {
    return (
        <PageSchema>
            <h1>Register Page</h1>
            <form>
                <label for="email">Email</label>                   <br/>
                <input type="text" id="email" name="email" value="tavic@gmail.com"/><br/>

                <label for="password">Password</label>                    <br/>
                <input type="text" id="password" name="password" value="123456"/> <br/><br/>

                <input type="submit" value="Submit"/>
            </form>

            <Link to='/login' name='Login' />
        </PageSchema>
    )
}

export default RegisterPage