import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDduRj9zVM4OYlTNTxbFnCR_PDlQ5zBCIE",
  authDomain: "social-web-site-57ddd.firebaseapp.com",
  projectId: "social-web-site-57ddd",
  storageBucket: "social-web-site-57ddd.appspot.com",
  messagingSenderId: "135497143766",
  appId: "1:135497143766:web:fc0376fdf3484859890077"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
