// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvYNQgWY02PzWg1Jsegl_v6-Q3xw30KLo",
  authDomain: "peru-hack.firebaseapp.com",
  projectId: "peru-hack",
  storageBucket: "peru-hack.appspot.com",
  messagingSenderId: "399670618706",
  appId: "1:399670618706:web:495f6e7b8e2d66c34bcd8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const db = getFirestore(app);
