// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnvwyyyzuFKuQNd9P2Q_z6ruWC8Tl33HY",
  authDomain: "pizzaauth-709d4.firebaseapp.com",
  projectId: "pizzaauth-709d4",
  storageBucket: "pizzaauth-709d4.appspot.com",
  messagingSenderId: "79362681838",
  appId: "1:79362681838:web:beb51ea15c6fefcaf4fcff",
  measurementId: "G-TG0HWTH7N5"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);