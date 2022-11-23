// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyABFvMI0hnUvzy1uWkSFrnEzVBChVSGYKQ",

    authDomain: "sqli-forum-51bf7.firebaseapp.com",

    projectId: "sqli-forum-51bf7",

    storageBucket: "sqli-forum-51bf7.appspot.com",

    messagingSenderId: "103078905019",

    appId: "1:103078905019:web:cf284b4a524955d3ad959e",

    measurementId: "G-81RNDXHSM5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
