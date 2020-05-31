import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <header>
                <nav className='container'>
                    <a href='./' className='brand-logo center'>MedLine</a>
                    <ul className='right'>
                        <li> <NavLink to={'/Line'}>My Line</NavLink></li>
                        <li> <NavLink to={'/LogOut'}>Log out</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;