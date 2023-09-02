// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKPBGlYh-i3bGIhFrUlkXfxcjxL3MEs1I",
  authDomain: "publed-c6998.firebaseapp.com",
  projectId: "publed-c6998",
  storageBucket: "publed-c6998.appspot.com",
  messagingSenderId: "336202645653",
  appId: "1:336202645653:web:df11124c10271dd2c65b9c",
  measurementId: "G-CS1N4X1WL8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
