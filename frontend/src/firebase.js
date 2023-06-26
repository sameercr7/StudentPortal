// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmV8bVMXwYcqYOopY0sYiKMMtrQob9M-s",
  authDomain: "kconnect-portal.firebaseapp.com",
  projectId: "kconnect-portal",
  storageBucket: "kconnect-portal.appspot.com",
  messagingSenderId: "478033267603",
  appId: "1:478033267603:web:d26a904ac5f13e0d59b666",
  measurementId: "G-CVBV2S17HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()
//const analytics = getAnalytics(app);

export {auth,provider}