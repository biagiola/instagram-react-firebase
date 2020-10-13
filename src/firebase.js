import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgc848XDhc5WmUpFhMzedbyXl8FDPseBY",
  authDomain: "instagram-clone-f4e79.firebaseapp.com",
  databaseURL: "https://instagram-clone-f4e79.firebaseio.com",
  projectId: "instagram-clone-f4e79",
  storageBucket: "instagram-clone-f4e79.appspot.com",
  messagingSenderId: "1017226063961",
  appId: "1:1017226063961:web:c31e092e6e58049129c148"
};

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };