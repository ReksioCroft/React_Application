import {NavLink} from 'react-router-dom'
import '../css/link.css'

function Link({to, name}: { to: string, name: string }) {
    return (
        <NavLink to={to}>
            {name}
        </NavLink>
    )
}


export default Link

