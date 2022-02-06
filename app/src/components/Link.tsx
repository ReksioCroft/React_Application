import {NavLink} from 'react-router-dom'
import '../css/link.css'
import {ReactElement} from "react";

function Link({to, name}: { to: string, name: string }): ReactElement {
    return (
        <NavLink to={to}>
            {name}
        </NavLink>
    )
}

export default Link
