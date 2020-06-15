import React, { Component } from "react";
import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
import { connect } from "react-redux";

class Navbar extends Component {
    render() {
        return (
            <nav className='nav-wrapper grey darken-3'>
                {this.props.loggedIn ? <LoggedInLinks /> : <LoggedOutLinks />}
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.firebase.auth.uid ? true : false
    }
}

export default connect(mapStateToProps)(Navbar);