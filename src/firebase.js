import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1lX5dlO7pfuoQUqX-WOKosvLL948Iyws",
  authDomain: "instagram-clone-9c657.firebaseapp.com",
  databaseURL: "https://instagram-clone-9c657.firebaseio.com",
  projectId: "instagram-clone-9c657",
  storageBucket: "instagram-clone-9c657.appspot.com",
  messagingSenderId: "48078907480",
  appId: "1:48078907480:web:37c8b67579f706a7f0422d",
  measurementId: "G-HVY1B9T542"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };