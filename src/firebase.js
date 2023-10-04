import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcTW7P0cfAj31TltcjOYPu3G4AYEEf-SE",
  authDomain: "chat-app-8a5fc.firebaseapp.com",
  projectId: "chat-app-8a5fc",
  storageBucket: "chat-app-8a5fc.appspot.com",
  messagingSenderId: "436526523250",
  appId: "1:436526523250:web:432f16d454915698f473eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(); // Auth
export const storage = getStorage(); // for storing
export const db = getFirestore(); //data-store (database)
