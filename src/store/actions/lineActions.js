export const addLine = (line) => {
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

export const deleteLine = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('lines').doc(id).delete()
            .then(() => {
                dispatch({ type: 'DELETE_LINE' });
            }).catch((err) => {
                dispatch({ type: 'DELETE_LINE_ERROR', err });
            })
    }
}

export const updateLine = (id, line) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('lines').doc(id).update({
            ...line
        }).then(() => {
            dispatch({ type: 'UPDATE_LINE', line });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_LINE_ERROR', err });
        })
    }
}

export const addEvent = (id, event) => {
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

export const updateEvent = (lineId, eventId, event) => {
    console.log('update action');
    console.log(lineId, eventId, event);
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('lines').doc(lineId).collection('events').doc(eventId).update({
            ...event
        })
            .then(() => {
                dispatch({ type: 'UPDATE_EVENT', lineId, eventId, event });
            }).catch((err) => {
                dispatch({ type: 'UPDATE_EVENT_ERROR', err });
            })

    }
}