// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJBrckBxoZSdQESSGeAhUkHVeHrctOtJI",
    authDomain: "netflixclone-40159.firebaseapp.com",
    projectId: "netflixclone-40159",
    storageBucket: "netflixclone-40159.appspot.com",
    messagingSenderId: "915858944223",
    appId: "1:915858944223:web:4b90f055081ae2507ab96a",
    measurementId: "G-WZR1PKGHFY"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }