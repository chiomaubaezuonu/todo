// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6IyGJSskEQZAuXjtXu_2qC1aQJhHbVoY",
  authDomain: "todo-app-b9706.firebaseapp.com",
  projectId: "todo-app-b9706",
  storageBucket: "todo-app-b9706.appspot.com",
  messagingSenderId: "194143491327",
  appId: "1:194143491327:web:c67ff6b8f4d709100768ca"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)