// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQfcn_jwMh3sWj24Kb6bBsl8u31S5dkQs",
  authDomain: "fir-prc-9eaad.firebaseapp.com",
  databaseURL:
    "https://fir-prc-9eaad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-prc-9eaad",
  storageBucket: "fir-prc-9eaad.appspot.com",
  messagingSenderId: "848444688075",
  appId: "1:848444688075:web:0a022a0898da679c1dfd4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
