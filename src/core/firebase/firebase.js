// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhj3FvRK_-kEPlrmQ5_fBwAiBKfwY7-6A",
  authDomain: "thmoreiralab-2ea10.firebaseapp.com",
  projectId: "thmoreiralab-2ea10",
  storageBucket: "thmoreiralab-2ea10.appspot.com",
  messagingSenderId: "1088334980611",
  appId: "1:1088334980611:web:09850f96febc6274669036",
  measurementId: "G-G7MGWM1ER0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
