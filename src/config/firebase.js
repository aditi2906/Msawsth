
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU6Ee-k0Ry_MQsPqJaH6kfi4O2I8PjLVw",
  authDomain: "mediname12.firebaseapp.com",
  projectId: "mediname12",
  storageBucket: "mediname12.appspot.com",
  messagingSenderId: "328322393809",
  appId: "1:328322393809:web:b0c619e95b6a8ee323c7f0",
  measurementId: "G-QNYPC71X3Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
