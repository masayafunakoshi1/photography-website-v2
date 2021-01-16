import firebase from 'firebase/app'
import 'firebase/storage';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAgt3rxm1oNV6DBwrKhG8LKyvLn6r0Ael4",
    authDomain: "photography-website-v2.firebaseapp.com",
    projectId: "photography-website-v2",
    storageBucket: "photography-website-v2.appspot.com",
    messagingSenderId: "205125373199",
    appId: "1:205125373199:web:a034e23b4650520c45c27a",
    measurementId: "G-WFWSHS78PV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {
    projectFirestore, projectStorage, firebase as default
}