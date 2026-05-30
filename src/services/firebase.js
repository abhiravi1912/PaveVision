import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "",
  measurementId: ""
};


const app = initializeApp(firebaseConfig);

// Create Firestore database instance
const db = getFirestore(app);

// Export it so other files can use it
export { db };
