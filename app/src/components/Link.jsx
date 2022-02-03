import { NavLink } from 'react-router-dom'


function Link( {to, name, ...rest}) {
    return (
        <NavLink to={to}>
            {name}
        </NavLink>
    )
}

export default Link