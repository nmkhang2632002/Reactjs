// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOTKfzaejl2nVPhQVRtkj3uMrPP1SXXkM",
  authDomain: "film-6e77c.firebaseapp.com",
  projectId: "film-6e77c",
  storageBucket: "film-6e77c.appspot.com",
  messagingSenderId: "302018455874",
  appId: "1:302018455874:web:e9c78dafe2065f79ff00db",
  measurementId: "G-4K8KVQKG89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
