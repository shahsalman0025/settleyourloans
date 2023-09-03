import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase} from 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyAPkOc01TOXaJMrDPztwta8dZoyij5GkS8",
  authDomain: "settle-loan.firebaseapp.com",
  projectId: "settle-loan",
  storageBucket: "settle-loan.appspot.com",
  messagingSenderId: "203471922593",
  appId: "1:203471922593:web:0453f2777a5218951457e0",
  measurementId: "G-RJHYN1MW8T"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app;
