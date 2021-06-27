import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBMfuhdPOpaD8ehjZv1EBaOa9G7T0oKl9o",
  authDomain: "nextjslinkdinclone.firebaseapp.com",
  projectId: "nextjslinkdinclone",
  storageBucket: "nextjslinkdinclone.appspot.com",
  messagingSenderId: "167928340292",
  appId: "1:167928340292:web:d66cfe87b27219f5d10111",
  measurementId: "G-7CQ7SY0B4F"
};


const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
:firebase.app();


const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };