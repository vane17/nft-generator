// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import  firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCggzVu4pGyStwB_qBg0UV6tE3S5aLjkI8",
  authDomain: "nft-generator-16b2f.firebaseapp.com",
  projectId: "nft-generator-16b2f",
  storageBucket: "nft-generator-16b2f.appspot.com",
  messagingSenderId: "924094079688",
  appId: "1:924094079688:web:be5138eaa1a70f19c8fbfd",
  measurementId: "G-RCJF7Z1L3Q"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp}
