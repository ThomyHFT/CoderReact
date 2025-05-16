// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI_UWOhRww8tjkIxjEZK0ehYpFIWIfZAY",
  authDomain: "oceanails-d9eba.firebaseapp.com",
  projectId: "oceanails-d9eba",
  storageBucket: "oceanails-d9eba.firebasestorage.app",
  messagingSenderId: "68429468233",
  appId: "1:68429468233:web:76bb5d518724dafed52598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);