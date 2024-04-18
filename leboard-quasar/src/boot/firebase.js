import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1u1hmiip6pHOlv2_UeNluee6ZS6Oyq_M",

  authDomain: "leboard-edd2d.firebaseapp.com",

  projectId: "leboard-edd2d",

  storageBucket: "leboard-edd2d.appspot.com",

  messagingSenderId: "973458191048",

  appId: "1:973458191048:web:c0b10ab8663ddf0b242bfd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
