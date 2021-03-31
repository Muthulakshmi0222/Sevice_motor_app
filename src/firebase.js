import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // databaseURL: process.env.REACT_APP_databaseURL,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    // measurementId: process.env.REACT_APP_measurementId
    apiKey: "AIzaSyABcTft2t4xbCc9lGEyfB5yKEdZTC7OARQ",
    authDomain: "glowing-anagram-267211.firebaseapp.com",
    databaseURL: "https://glowing-anagram-267211-default-rtdb.firebaseio.com",
    projectId: "glowing-anagram-267211",
    storageBucket: "glowing-anagram-267211.appspot.com",
    messagingSenderId: "12373976136",
    appId: "1:12373976136:web:cc4f647058b97f7caf647d",
    measurementId: "G-0W69YD10Y6"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider };
export default firebaseApp;
