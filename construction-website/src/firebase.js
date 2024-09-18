// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDomv7Rdhp3l5Oh_eCQoUllnJkko2TgeJg",
  authDomain: "armstrong-buildings.firebaseapp.com",
  projectId: "armstrong-buildings",
  storageBucket: "armstrong-buildings.appspot.com",
  messagingSenderId: "974558723513",
  appId: "1:974558723513:web:51005c6f74a0af36c0ca68",
  measurementId: "G-QX5R9H890T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore
export {db}