// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRLKeK7QcmOFeHgPpeCWTwameGqBdEhjc",
  authDomain: "movie-gpt-579c2.firebaseapp.com",
  projectId: "movie-gpt-579c2",
  storageBucket: "movie-gpt-579c2.appspot.com",
  messagingSenderId: "5785569591",
  appId: "1:5785569591:web:fdb98a708500a1720772b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();