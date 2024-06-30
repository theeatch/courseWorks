import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { getDatabase, ref, get, child, update } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAkAwbZNNsmJjSgcTIvDYkIYZQa0pVlL-8",
  authDomain: "courses-b2a47.firebaseapp.com",
  databaseURL:
    "https://courses-b2a47-default-rtdb.asia-southeast1.firebasedatabase.app", // Add this line
  projectId: "courses-b2a47",
  storageBucket: "courses-b2a47.appspot.com",
  messagingSenderId: "852842948144",
  appId: "1:852842948144:web:116c14f4b82d6970202ff5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const firedb = getFirestore(app);
const auth = getAuth(app);
export {
  db,
  ref,
  setDoc,
  get,
  updateDoc,
  getDoc,
  doc,
  child,
  auth,
  onAuthStateChanged,
  firedb,
  update,
};
