import {NavLink} from 'react-router-dom'
import '../css/link.css'

function Link({to, name, ...rest}) {
    return (
        <NavLink to={to}>
            {name}
        </NavLink>
    )
}


export default Link