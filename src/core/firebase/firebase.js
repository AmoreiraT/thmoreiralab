// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzmqqgP7T484p6at2tmq1XQTBsaWjo7Qg",
  authDomain: "thmoreiralab-ec20b.firebaseapp.com",
  projectId: "thmoreiralab-ec20b",
  storageBucket: "thmoreiralab-ec20b.appspot.com",
  messagingSenderId: "690088339458",
  appId: "1:690088339458:web:c5bb9aea7c552fe8e79f1b",
  measurementId: "G-P9B41YSVWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
