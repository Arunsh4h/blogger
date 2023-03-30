// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8I866hx4vfX6VhD7bFXkT0RGkk91DxPI",
  authDomain: "gurutech3215.firebaseapp.com",
  databaseURL: "https://gurutech3215-default-rtdb.firebaseio.com",
  projectId: "gurutech3215",
  storageBucket: "gurutech3215.appspot.com",
  messagingSenderId: "430962761306",
  appId: "1:430962761306:web:b9dd6ab5c7cafc155a8263",
  measurementId: "G-2Q614CCBX4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
