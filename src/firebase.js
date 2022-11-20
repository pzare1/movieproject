import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCpI6pC3_Mi48i9C42v4I-XRZTxFxr2SU",
    authDomain: "movie-project-fin.firebaseapp.com",
    projectId: "movie-project-fin",
    storageBucket: "movie-project-fin.appspot.com",
    messagingSenderId: "644480781766",
    appId: "1:644480781766:web:c9f18a546921ad7dd3b6c7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth}
  export default db;