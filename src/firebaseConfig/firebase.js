import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMeuMansl8eJCt-1nApOywTYncPF2dIAQ",
  authDomain: "chat-app-8ab63.firebaseapp.com",
  projectId: "chat-app-8ab63",
  storageBucket: "chat-app-8ab63.appspot.com",
  messagingSenderId: "317645144927",
  appId: "1:317645144927:web:a17a7048ec3afc60216cea"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);