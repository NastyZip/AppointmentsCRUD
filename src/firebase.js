import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDlPJrG7V6YRksX3u_ns-y_ESoJY_RI96c",
  authDomain: "appointment-project-nasty.firebaseapp.com",
  projectId: "appointment-project-nasty",
  storageBucket: "appointment-project-nasty.firebasestorage.app",
  messagingSenderId: "246539244256",
  appId: "1:246539244256:web:96220b7eafebb5b8923685",
  measurementId: "G-SMPV2KCDG6"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);