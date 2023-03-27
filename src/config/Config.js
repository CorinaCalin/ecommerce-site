//import firebase from 'firebase/app';
//import * as firebase from 'firebase';
//pentru versiunile noi de firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmIIlR26n-gmx7qypkqucCmL3OwQSMmzU",
  authDomain: "ecommerce-site-87874.firebaseapp.com",
  projectId: "ecommerce-site-87874",
  storageBucket: "ecommerce-site-87874.appspot.com",
  messagingSenderId: "832652100092",
  appId: "1:832652100092:web:a7c4698f94c6c1ea6d3279",
  measurementId: "G-ZS0CXGH1CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebase.auth);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage}