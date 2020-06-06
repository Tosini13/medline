import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import LinesList from './Line/LinesList'
import { Redirect } from "react-router-dom";


class Home extends Component {
    render() {
        if (!this.props.signedIn) return <Redirect to='/signin' />
        return (
            <LinesList lines={this.props.lines} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lines: state.firestore.ordered.lines,
        signedIn: state.firebase.auth.uid ? true : false
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'lines' }
    ])
)(Home);