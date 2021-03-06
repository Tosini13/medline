import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import LinesList from './Line/LinesList'
import { Redirect } from "react-router-dom";


class Home extends Component {

    render() {
        const { lines, auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <LinesList lines={lines} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lines: state.firestore.ordered.lines,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => {
        if (!props.auth.uid) return []
        return [
            {
                collection: 'lines',
                where: [['ownerId', '==', props.auth.uid]]
            }
        ]
    })
)(Home);