// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaCTsgG4hMV-MKPdY9bDjneme9e75psio",
  authDomain: "paperperday-480aa.firebaseapp.com",
  projectId: "paperperday-480aa",
  storageBucket: "paperperday-480aa.firebasestorage.app",
  messagingSenderId: "39994480274",
  appId: "1:39994480274:web:4a2d34cad6bd5e6f36b84b",
  measurementId: "G-JNBZNSYJ1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
