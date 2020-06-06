import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const LoggedInLinks = (props) => {
    return (
        <ul className='right'>
            <li> <NavLink exact to={'/'}>Home</NavLink></li>
            <li> <NavLink to={'/create'}>Create Line</NavLink></li>
            <li> <a onClick={props.signOut}>Log out</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(LoggedInLinks);