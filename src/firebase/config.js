import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBOljS7Tepm2Wq_CUQbgxyswSBx8ksuti4",
    authDomain: "blog-67ab4.firebaseapp.com",
    projectId: "blog-67ab4",
    storageBucket: "blog-67ab4.appspot.com",
    messagingSenderId: "517198636262",
    appId: "1:517198636262:web:c929a56edb5995da858727"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };