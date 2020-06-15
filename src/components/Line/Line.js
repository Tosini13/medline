import React from "react";
import '../../css/line.css';
import LineEvent from './LineEvent.js';
import CreateLineEvent from './CreateLineEvent.js';
import { connect } from "react-redux";
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from "react-router-dom";
import { deleteEvent, deleteLine } from '../../store/actions/lineActions'
import LineDashboard from './LineDashboard'
import SplashScreen from "../Extra/SplashScreen";

const Line = (props) => {

    if (!props.signedIn) return <Redirect to='/signin' />

    const { line, events } = props;
    if (line && events) {
        const style = {
            borderColor: line.color,
        }

        return (
            <div className='lineContainer container'>
                <LineDashboard props={props} deleteLine={props.deleteLine} />
                <div className='eventsContainer'>
                    <div className='line' style={style}>
                    </div>
                    {events && events.map((event) => {
                        return (
                            <LineEvent key={event.id} id={props.id} event={event} mainColor={props.line.color} deleteEvent={props.deleteEvent} />
                        )
                    })}
                    <CreateLineEvent id={props.id} mainColor={line.color} />
                </div>
            </div>
        );
    } else {
        return (
            <SplashScreen />
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.line_id;
    let lines = state.firestore.data.lines;
    let line = lines ? lines[id] : null;
    return {
        line,
        id,
        signedIn: state.firebase.auth.uid ? true : false,
        events: state.firestore.ordered.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (lineId, eventId) => { dispatch(deleteEvent(lineId, eventId)) },
        deleteLine: (id) => { dispatch(deleteLine(id)) }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => {
        return [{
            collection: 'lines',
            doc: props.match.params.line_id,
            subcollections: [{ collection: 'events', orderBy: ['date', 'asc'] }],
            storeAs: 'events'
        }]
    })
)(Line);