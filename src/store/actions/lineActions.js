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
    console.log(id, event);
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('lines').doc(id).collection('events').add({
            ...event
        }).then(() => {
            dispatch({ type: 'ADD_LINE', id, event });
        }).catch((err) => {
            dispatch({ type: 'ADD_LINE_ERROR', err });
        })
    }
}