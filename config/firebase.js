import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { firebaseAPIKey } from "../src/utils/consts"

const firebaseConfig = {
  apiKey: firebaseAPIKey,
  authDomain: "prime-ninja-auth.firebaseapp.com",
  projectId: "prime-ninja-auth",
  storageBucket: "prime-ninja-auth.appspot.com",
  messagingSenderId: "678024346312",
  appId: "1:678024346312:web:34c6e52776be7ad86ac3fd",
  measurementId: "G-XF9424R3CQ",
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const provider = new GoogleAuthProvider()

export { auth, provider }
