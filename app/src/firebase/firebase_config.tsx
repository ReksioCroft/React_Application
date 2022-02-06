// Import the functions you need from the SDKs you need
import {initializeApp, FirebaseApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXlVBp6s0FWF-PP5_D9LuHrPECNxl0aZA",
    authDomain: "react-fmi.firebaseapp.com",
    databaseURL: "https://react-fmi-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-fmi",
    storageBucket: "react-fmi.appspot.com",
    messagingSenderId: "715645029696",
    appId: "1:715645029696:web:61c82651df7cb71d02fea5",
    measurementId: "G-7099WE6V69"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp)
