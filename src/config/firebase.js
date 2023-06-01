// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and late r, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABN-pvQe2HM6KCKTuwnPDN9QDlZXEf4S0",
  authDomain: "learn-7997c.firebaseapp.com",
  projectId: "learn-7997c",
  storageBucket: "learn-7997c.appspot.com",
  messagingSenderId: "79558872232",
  appId: "1:79558872232:web:455af7ab818d599562469d",
  measurementId: "G-07NHPXD5SZ",
  databaseURL: "https://learn-7997c-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
