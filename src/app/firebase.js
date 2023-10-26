// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANTHUFOXYymJHwP3Z487bxPfrue6SsbOU",
  authDomain: "sanofi-v1-fb18f.firebaseapp.com",
  projectId: "sanofi-v1-fb18f",
  storageBucket: "sanofi-v1-fb18f.appspot.com",
  messagingSenderId: "1079438329531",
  appId: "1:1079438329531:web:189f7bb709406f33834b9e",
  measurementId: "G-KBHTJ9HM7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const storage = getStorage(app);

export const db =  getFirestore(app);