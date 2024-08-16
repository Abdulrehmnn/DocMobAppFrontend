import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, addDoc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc, runTransaction, query, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { initializeApp } from "firebase/app";
//import { config } from 'dotenv';
// import process from '../process.env';
//config();

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyBimBuyyGM-Qi4pgh5sy1P0ByqW7C1thew",
    authDomain: "tabibi-f8b08.firebaseapp.com",
    projectId: "tabibi-f8b08",
    storageBucket: "tabibi-f8b08.appspot.com",
    messagingSenderId: "959694566842",
    appId: "1:959694566842:web:1082276f33de5d98a19983"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage, signInWithEmailAndPassword, signOut, onAuthStateChanged, uploadBytesResumable, createUserWithEmailAndPassword, addDoc, runTransaction, doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc, ref, uploadBytes, getDownloadURL, query, where };