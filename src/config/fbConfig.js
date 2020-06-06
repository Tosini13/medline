import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAo5h3OUNmYxDZqiu1yDlZEKsyw-I0Nkx8",
    authDomain: "medline-9bd59.firebaseapp.com",
    databaseURL: "https://medline-9bd59.firebaseio.com",
    projectId: "medline-9bd59",
    storageBucket: "medline-9bd59.appspot.com",
    messagingSenderId: "1013765246466",
    appId: "1:1013765246466:web:a83a0701eb179a37aa211b",
    measurementId: "G-NSQEXBGSGM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.firestore();
export default firebase;