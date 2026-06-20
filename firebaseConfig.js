// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqVpiqP3Sul7gRX5A_7ztUdkUq91Ox6i0",
  authDomain: "testelogin-d0d37.firebaseapp.com",
  projectId: "testelogin-d0d37",
  storageBucket: "testelogin-d0d37.firebasestorage.app",
  messagingSenderId: "982150836862",
  appId: "1:982150836862:web:b5b8c9a0c873efe6679e2f",
  measurementId: "G-9K56C1H5SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);