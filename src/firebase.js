
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { 
  createUserWithEmailAndPassword, 
  getAuth,
  signInWithEmailAndPassword,
  signOut
 } from "firebase/auth";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyDZcWdPl4QU2Bwl0Or-f6nk4zcxhIm8T6I",
  authDomain: "netflix-clone-a2ff1.firebaseapp.com",
  projectId: "netflix-clone-a2ff1",
  storageBucket: "netflix-clone-a2ff1.firebasestorage.app",
  messagingSenderId: "668069948943",
  appId: "1:668069948943:web:53486d37aa2679a9c4bd7a",
  measurementId: "G-CDCS5FD26S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db,"user"),{
      uid: user.uid,
      name,
      authProvider:"local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
} 

const login = async(email, password)=>{
  try {
    await signInWithEmailAndPassword(auth, email, password );
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = () =>{
  signOut(auth);
}

export {auth,db, login, signup, logout};