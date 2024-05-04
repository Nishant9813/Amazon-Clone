import { initializeApp } from "firebase/app";
import { getFirestore ,collection, doc, setDoc} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIczVnOx0RYOryXKY0DXqHnpfcsB6NdCA",
  authDomain: "challenge-181d1.firebaseapp.com",
  projectId: "challenge-181d1",
  storageBucket: "challenge-181d1.appspot.com",
  messagingSenderId: "1029002616542",
  appId: "1:1029002616542:web:e1fed7bcc81d22d3dcac4f",
  measurementId: "G-N8X0KGRJG1",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged ,signOut , collection, doc, setDoc};