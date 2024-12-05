// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection,getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKA1t7dQMqnchimhv9W6N8SYTXcYC4lSo",
  authDomain: "zoom-clone-a936f.firebaseapp.com",
  projectId: "zoom-clone-a936f",
  storageBucket: "zoom-clone-a936f.appspot.com",
  messagingSenderId: "414366945695",
  appId: "1:414366945695:web:56a036da750e3f53c72daa",
  measurementId: "G-SRQK3XJD2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
export const firebaseDB =getFirestore(app);
export const usersRef=collection(firebaseDB,"users");
export const meetingsRef=collection(firebaseDB,"meetings");