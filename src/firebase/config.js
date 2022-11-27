import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCKp_2-DLhuziNNrW2Piiri29Tb8bPLm98",
    authDomain: "projectmanagerdojo.firebaseapp.com",
    projectId: "projectmanagerdojo",
    storageBucket: "projectmanagerdojo.appspot.com",
    messagingSenderId: "833432426205",
    appId: "1:833432426205:web:41631c0e3dc04d77746d34"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }