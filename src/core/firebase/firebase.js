// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTHD,
  projectId: process.env.REACT_APP_FB_PID,
  storageBucket: process.env.REACT_APP_FB_SBKT,
  messagingSenderId: process.env.REACT_APP_FB_MSID,
  appId: process.env.REACT_APP_FB_APPID,
  measurementId: process.env.REACT_APP_FB_FB_MID,
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
