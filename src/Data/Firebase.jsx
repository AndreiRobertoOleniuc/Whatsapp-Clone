import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCQNn8-ZT1VDWtPyGMiyZOYzkK0ofEcu0s",
    authDomain: "testing-53102.firebaseapp.com",
    projectId: "testing-53102",
    storageBucket: "testing-53102.appspot.com",
    messagingSenderId: "858320320078",
    appId: "1:858320320078:web:56da212d890e1844cb751f"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleAuth };

const actions = {
    database: db,
    authentification: auth,
    google: googleAuth
}
export default actions;