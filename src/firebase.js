// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClAyCRJPTRM4ZQqpXbWZxiNYN9vUoJ6UE",
  authDomain: "auth-6e594.firebaseapp.com",
  projectId: "auth-6e594",
  storageBucket: "auth-6e594.appspot.com",
  messagingSenderId: "477419175828",
  appId: "1:477419175828:web:b412eb22635e0388dc5981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app