// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD21wy8n8N3RewSYG9LmZRMLq43UhDM1tg",
  authDomain: "my-portfolia-e5ce0.firebaseapp.com",
  projectId: "my-portfolia-e5ce0",
  storageBucket: "my-portfolia-e5ce0.appspot.com",
  messagingSenderId: "640186992100",
  appId: "1:640186992100:web:7abda0292c17d4ab5c73f1"
};


     const app = initializeApp(firebaseConfig);

   const db = getFirestore(app);
   export {db,app}