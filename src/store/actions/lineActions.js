export const addLine = (line) => {
    console.log(line);
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        const ownerId = getState().firebase.auth.uid;

        firestore.collection('lines').add({
            ...line,
            ownerId
        }).then(() => {
            dispatch({ type: 'ADD_LINE', line });
        }).catch((err) => {
            dispatch({ type: 'ADD_LINE_ERROR', err });
        })
    }
}

export const addEvent = (id, event) => {
    console.log(event);
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('lines').doc(id).collection('events').add({
            ...event
        }).then(() => {
            dispatch({ type: 'ADD_EVENT', id, event });
        }).catch((err) => {
            dispatch({ type: 'ADD_EVENT_ERROR', err });
        })
    }
}

export const deleteEvent = (lineId, eventId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('lines').doc(lineId).collection('events').doc(eventId).delete()
            .then(() => {
                dispatch({ type: 'DELETE_EVENT', lineId, eventId });
            }).catch((err) => {
                dispatch({ type: 'DELETE_EVENT_ERROR', err });
            })
    }
}