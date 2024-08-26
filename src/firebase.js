// src/firebase.js

import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from 'react-toastify';

// Configurația Firebase (înlocuiește cu datele tale din Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyATiY1rNrlBAXcmgZ2CvoqpLBuk10KZNRk",
  authDomain: "netflix-clone-9a85d.firebaseapp.com",
  projectId: "netflix-clone-9a85d",
  storageBucket: "netflix-clone-9a85d.appspot.com",
  messagingSenderId: "257291525748",
  appId: "1:257291525748:web:248314f2e892687e7b3b21"
};

// Inițializează aplicația Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Funcția de înregistrare
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user; 
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Funcția de autentificare
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Funcția de deconectare
const logout = () => {
  signOut(auth);
};

// Exportă funcțiile și instanțele necesare
export { auth, db, login, signup, logout };
