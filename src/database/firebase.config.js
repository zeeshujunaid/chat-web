import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAMeuMansl8eJCt-1nApOywTYncPF2dIAQ",
  authDomain: "chat-app-8ab63.firebaseapp.com",
  projectId: "chat-app-8ab63",
  storageBucket: "chat-app-8ab63.appspot.com",
  messagingSenderId: "317645144927",
  appId: "1:317645144927:web:a17a7048ec3afc60216cea"
};

const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

export {db,auth};