// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLAE2wxs9waszCPXPNvJ1CjIOEruemTrU",
  authDomain: "ndap-27ce1.firebaseapp.com",
  projectId: "ndap-27ce1",
  storageBucket: "ndap-27ce1.firebasestorage.app",
  messagingSenderId: "250067759908",
  appId: "1:250067759908:web:0c199ce733db60905639b1",
  measurementId: "G-P2471281CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();