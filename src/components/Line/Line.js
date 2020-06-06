import React from "react";
import '../../css/line.css';
// import LineEvent from './LineEvent.js';
// import CreateLineEvent from './CreateLineEvent.js';
import { connect } from "react-redux";
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from "react-router-dom";

const Line = (props) => {

    if (!props.signedIn) return <Redirect to='/signin' />

    const { line } = props;

    if (line) {
        const style = {
            borderColor: line.color,
        }

        // let events = line.events.map((event) => {
        //     return (
        //         <LineEvent key={event.id} event={event} mainColor={props.line.color} />
        //     )
        // });

        return (
            <div className='lineContainer'>
                <h3 className='lineTitle' style={{ color: line.color }}>{line.title}</h3>
                <div>
                    <div className='line' style={style}>
                    </div>
                    {/* {events} */}
                    {/* <CreateLineEvent iter={line.events.length} id={line.id} mainColor={line.color} /> */}
                </div>
            </div>
        );
    } else {
        return (
            <div className='lineContainer'>
                <p>Loading line...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.line_id;
    let lines = state.firestore.data.lines;
    let line = lines ? lines[id] : null;
    return {
        line,
        signedIn: state.firebase.auth.uid ? true : false
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'lines' }
    ])
)(Line);