// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7m-1X8aQgxpvlfAIzQkGxoJxituiZEMA",
    authDomain: "eventplanet-8041f.firebaseapp.com",
    projectId: "eventplanet-8041f",
    storageBucket: "eventplanet-8041f.appspot.com",
    messagingSenderId: "881455397061",
    appId: "1:881455397061:web:6f362f9f64be08ecc918ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;