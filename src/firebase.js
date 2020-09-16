import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDw4v7Ujzc33Zsvpbh-S53kgdsORW_RMxA",
    authDomain: "linkedin-clone-46dae.firebaseapp.com",
    databaseURL: "https://linkedin-clone-46dae.firebaseio.com",
    projectId: "linkedin-clone-46dae",
    storageBucket: "linkedin-clone-46dae.appspot.com",
    messagingSenderId: "367806677919",
    appId: "1:367806677919:web:0b797cb76694a4f0c5f3aa",
    measurementId: "G-ZQ9BM9ZNKR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;