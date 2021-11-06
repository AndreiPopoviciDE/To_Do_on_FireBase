//import firebase from "firebase/compat";
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "Your config",
  authDomain: "Your config",
  projectId: "Your config",
  storageBucket: "Your config",
  messagingSenderId: "Your config",
  appId: "Your config"
};


export const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb)