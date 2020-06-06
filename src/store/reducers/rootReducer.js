import { combineReducers } from "redux";
import authReducer from "./authReducer";
import lineReducer from "./lineReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    line: lineReducer,
    firestore: firestoreReducer, //retrieve data from db
    firebase: firebaseReducer, //sync auth status with firebase
})

export default rootReducer;