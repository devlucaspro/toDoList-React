import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCrt0OOHuJFq3kbLxfOtxjZyHVBD1eG7M0",
    authDomain: "curso-bae92.firebaseapp.com",
    projectId: "curso-bae92",
    storageBucket: "curso-bae92.appspot.com",
    messagingSenderId: "104001277679",
    appId: "1:104001277679:web:62c6b811410557c62b551a",
    measurementId: "G-90LM30PZJ4"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };