import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1hQx6sdUxeO70DdAagB3bEyUJtluey_g",
  authDomain: "global-nabeelshafi.firebaseapp.com",
  projectId: "global-nabeelshafi",
  storageBucket: "global-nabeelshafi.appspot.com",
  messagingSenderId: "164403125345",
  appId: "1:164403125345:web:51c66d5aeee2decba31e20"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export {
    auth,
    db,
    storage
}