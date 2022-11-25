import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTQsJbauX3BYDY98wckXgKGvJo_iHQD9I",
  authDomain: "blus-space.firebaseapp.com",
  projectId: "blus-space",
  storageBucket: "blus-space.appspot.com",
  messagingSenderId: "552797446191",
  appId: "1:552797446191:web:e1602fba115393b0ffe6da",
  measurementId: "G-FKYNJE0TJ4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });