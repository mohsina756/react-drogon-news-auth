// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASUABqDLIrPc8WaD6yvSJVfXcNiIR7Tno",
  authDomain: "react-drogon-news-auth.firebaseapp.com",
  projectId: "react-drogon-news-auth",
  storageBucket: "react-drogon-news-auth.appspot.com",
  messagingSenderId: "417439816736",
  appId: "1:417439816736:web:c6224a6aaa77562dfd3045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;