import React from "react";
import '../../css/line.css';
import LineEvent from './LineEvent.js';
import CreateLineEvent from './CreateLineEvent.js';
import { connect } from "react-redux";
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from "react-router-dom";
import { deleteEvent } from '../../store/actions/lineActions'

const Line = (props) => {

    if (!props.signedIn) return <Redirect to='/signin' />

    const { line, events } = props;
    if (line && events) {
        const style = {
            borderColor: line.color,
        }

        return (
            <div className='lineContainer'>
                <p className='lineTitle'>{line.title}</p>
                <div>
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
        id,
        signedIn: state.firebase.auth.uid ? true : false,
        events: state.firestore.ordered.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEvent: (lineId, eventId) => { dispatch(deleteEvent(lineId, eventId)) }
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