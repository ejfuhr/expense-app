import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update, remove, off, push, 
    onChildRemoved, onChildChanged, onChildAdded, child, get } from "firebase/database"; 
    //set(), remove(), update(), get() are promises so can you .then for successful result and .catch for failures/errors
import { GoogleAuthProvider } from "firebase/auth";
import regeneratorRuntime from "regenerator-runtime"; 
 
// YOUR CONFIG HERE //
// firebase 9.8.1
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {

    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };
 
initializeApp(config);


export const app = initializeApp(config);

export const db = getDatabase();

export const googleAuthProvider = new GoogleAuthProvider();

//from firebase site
/*
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
*/