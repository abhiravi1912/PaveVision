import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsVuaDVqXmP6ncA0Gr-bO_lzNfsYTfLvE",
  authDomain: "pavevision-f254d.firebaseapp.com",
  projectId: "pavevision-f254d",
  storageBucket: "pavevision-f254d.firebasestorage.app",
  messagingSenderId: "824175742075",
  appId: "1:824175742075:web:fc39e0bbd1669fd1b226de",
  measurementId: "G-7JRLTXD8LG"
};

const app = initializeApp(firebaseConfig);

// Create Firestore database instance
const db = getFirestore(app);

// Export it so other files can use it
export { db };