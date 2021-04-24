import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-elWHDQw2ED__ozvaVSCZ3CHRagH0X7Y",
    authDomain: "disneyplus-clone-77bb2.firebaseapp.com",
    projectId: "disneyplus-clone-77bb2",
    storageBucket: "disneyplus-clone-77bb2.appspot.com",
    messagingSenderId: "588705276732",
    appId: "1:588705276732:web:36b037bb6965a08e8bb439",
    measurementId: "G-NXX8RSMNPW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;