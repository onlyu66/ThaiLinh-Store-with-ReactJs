// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDISR-ltFXUD7PDgEq8gVsHHui_abpNa7k",
  authDomain: "imagesproducts-705b0.firebaseapp.com",
  projectId: "imagesproducts-705b0",
  storageBucket: "imagesproducts-705b0.appspot.com",
  messagingSenderId: "923915200342",
  appId: "1:923915200342:web:41520fe1b29dd043e998f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
