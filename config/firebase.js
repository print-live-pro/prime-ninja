import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { firebaseAPIKey } from "../src/utils/consts"

const firebaseConfig = {
  apiKey: "AIzaSyCasvCx4QWDvHgfH-DNp4kK1cTA3kIvEOI",
  authDomain: "print-ninja.firebaseapp.com",
  projectId: "print-ninja",
  storageBucket: "print-ninja.appspot.com",
  messagingSenderId: "953146006674",
  appId: "1:953146006674:web:bf40b3b3797d90a694da4b"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth, provider }
