import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className='nav-wrapper grey darken-3'>
                <div className='container'>
                    <a href='./' className='brand-logo center'>MedLine</a>
                    <ul className='right'>
                        <li> <NavLink to={'/Line'}>My Line</NavLink></li>
                        <li> <NavLink to={'/LogOut'}>Log out</NavLink></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;