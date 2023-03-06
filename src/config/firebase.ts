// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw5X4hMUKRUmwwSSkbRcsdJJJ4pPY1Fss",
  authDomain: "fir-react-app-63a6f.firebaseapp.com",
  projectId: "fir-react-app-63a6f",
  storageBucket: "fir-react-app-63a6f.appspot.com",
  messagingSenderId: "1016200186762",
  appId: "1:1016200186762:web:578ca2d2bf9c180a4a5673",
  measurementId: "G-0N7FZNRBJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();