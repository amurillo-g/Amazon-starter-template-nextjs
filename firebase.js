import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA5mOcY1BoUaqa9Cn1dcPt3ykpM3KzOzl4",
    authDomain: "clone-nx.firebaseapp.com",
    projectId: "clone-nx",
    storageBucket: "clone-nx.appspot.com",
    messagingSenderId: "499322756594",
    appId: "1:499322756594:web:c0058167cf5bc4b1f0df6b"
  };

const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app(); 

  const db = app.firestore();

  export default db
 