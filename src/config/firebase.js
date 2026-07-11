// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfc4WaW5WCsQJ2bZt4VhkuhxrIduEWOEY",
  authDomain: "akira-app-7096b.firebaseapp.com",
  projectId: "akira-app-7096b",
  storageBucket: "akira-app-7096b.firebasestorage.app",
  messagingSenderId: "1042217268757",
  appId: "1:1042217268757:web:805cb79db018f6c472801c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
