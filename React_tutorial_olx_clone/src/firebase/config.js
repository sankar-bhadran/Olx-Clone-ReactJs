import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC3J50GoQbryadKXle9pDl_-SS3n0P9Azc",
    authDomain: "olx-demo-5a042.firebaseapp.com",
    projectId: "olx-demo-5a042",
    storageBucket: "olx-demo-5a042.appspot.com",
    messagingSenderId: "743588877445",
    appId: "1:743588877445:web:a9fef455b711e9d38b85ec",
    measurementId: "G-BJ9F1M8RP8"
  };

export default firebase.initializeApp(firebaseConfig)