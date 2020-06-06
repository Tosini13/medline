import React from 'react'
import { NavLink } from "react-router-dom";

const LoggedOutLinks = (props) => {
    return (
        <ul className='right'>
            <li> <NavLink to={'/signup'}>Sign up</NavLink></li>
            <li> <NavLink to={'/signin'}>Sign in</NavLink></li>
        </ul>
    )
}

export default LoggedOutLinks;