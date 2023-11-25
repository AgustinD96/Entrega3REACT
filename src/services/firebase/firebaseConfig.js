import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAsq9DYwxbTIECywpyc4B-K4PFwVfECL8Y",
  authDomain: "entrega-final-f2cbe.firebaseapp.com",
  projectId: "entrega-final-f2cbe",
  storageBucket: "entrega-final-f2cbe.appspot.com",
  messagingSenderId: "579972218068",
  appId: "1:579972218068:web:55c9e3154ad2d52e088f41",
  measurementId: "G-6ZX0FNJ0E7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);