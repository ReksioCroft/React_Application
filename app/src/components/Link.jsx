import { NavLink } from 'react-router-dom'


function Link( {to, name}) {
    return (
        <NavLink to={to}>
            {name}
        </NavLink>
    )
}

export default Link