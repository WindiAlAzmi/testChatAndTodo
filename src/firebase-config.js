// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFZFa--oDYf-_25MFGx1WAwli286Ppmwo",
  authDomain: "chat-app-fc8f1.firebaseapp.com",
  projectId: "chat-app-fc8f1",
  storageBucket: "chat-app-fc8f1.appspot.com",
  messagingSenderId: "461392197894",
  appId: "1:461392197894:web:6e22867d95dcca0a2e4687",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

