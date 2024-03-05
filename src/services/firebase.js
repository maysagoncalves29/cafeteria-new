// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getFirestore, addDoc, collection, getDoc  } from "firebase/firestore"
import { todosOsProdutos } from "../mock/produtos";

const firebaseConfig = {
  apiKey: "AIzaSyD9kOYLsy_z8iDq1JWlegzWnNbxS2g8mW0",
  authDomain: "projeto-coderhouse.firebaseapp.com",
  projectId: "projeto-coderhouse",
  storageBucket: "projeto-coderhouse.appspot.com",
  messagingSenderId: "270421067445",
  appId: "1:270421067445:web:3857fba26f6c8cb28e20fc",
  measurementId: "G-4NB5DZH6LG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
todosOsProdutos.forEach(async(obj) => {
    const docRef = await addDoc(collection(db, "produtos" ), obj);
    console.log("Document written with ID: ", docRef.id)
})

