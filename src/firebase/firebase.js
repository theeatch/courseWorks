import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAkAwbZNNsmJjSgcTIvDYkIYZQa0pVlL-8",
  authDomain: "courses-b2a47.firebaseapp.com",
  databaseURL: "https://courses-b2a47-default-rtdb.asia-southeast1.firebasedatabase.app", // Add this line
  projectId: "courses-b2a47",
  storageBucket: "courses-b2a47.appspot.com",
  messagingSenderId: "852842948144",
  appId: "1:852842948144:web:116c14f4b82d6970202ff5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get, child };
