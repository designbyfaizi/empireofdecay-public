import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBXouQfHoOqglIqnK7_EvemYG3YnN60RVU",
    authDomain: "empireofdecay.firebaseapp.com",
    projectId: "empireofdecay",
    storageBucket: "empireofdecay.appspot.com",
    messagingSenderId: "309503681842",
    appId: "1:309503681842:web:a40aec6429bdf6ef42a32b",
    measurementId: "G-PQQ3QNZDMX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

export const auth = firebase.auth();
export const db = firebase.firestore();