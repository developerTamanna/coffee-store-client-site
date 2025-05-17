// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdYeExoXKkj9WKMQJc6nK_6StcDKxi2CY",
  authDomain: "coffee-store-application-634cb.firebaseapp.com",
  projectId: "coffee-store-application-634cb",
  storageBucket: "coffee-store-application-634cb.firebasestorage.app",
  messagingSenderId: "989368419373",
  appId: "1:989368419373:web:6f553f543c614d27c524a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
