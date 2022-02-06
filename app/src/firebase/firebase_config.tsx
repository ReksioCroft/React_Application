// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXlVBp6s0FWF-PP5_D9LuHrPECNxl0aZA",
    authDomain: "react-fmi.firebaseapp.com",
    projectId: "react-fmi",
    storageBucket: "react-fmi.appspot.com",
    messagingSenderId: "715645029696",
    appId: "1:715645029696:web:61c82651df7cb71d02fea5",
    measurementId: "G-7099WE6V69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
