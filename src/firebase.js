// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW3HZtcR1JGTt4LooAZKGig3t1fRGPEyY",
    authDomain: "ott-streaming-project.firebaseapp.com",
    projectId: "ott-streaming-project",
    storageBucket: "ott-streaming-project.appspot.com",
    messagingSenderId: "665976373100",
    appId: "1:665976373100:web:4e2399f35220d844c5bd49",
    measurementId: "G-58DFH5Q7NF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
