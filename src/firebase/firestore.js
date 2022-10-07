import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7lRcgTmThNvQpHYNJRCLsGeW4dnZIGio",
  authDomain: "loto-shop.firebaseapp.com",
  projectId: "loto-shop",
  storageBucket: "loto-shop.appspot.com",
  messagingSenderId: "938568484715",
  appId: "1:938568484715:web:ba1370a8d6e444ce8a6e2e",
  measurementId: "G-MSZCKY2X7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);
