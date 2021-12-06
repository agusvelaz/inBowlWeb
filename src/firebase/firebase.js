import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase-

const firebaseConfig = {
  apiKey: "AIzaSyAMr-hU-h_C4HnYODAARAu9ehb_p8t7uoU",
  authDomain: "myshop-8b686.firebaseapp.com",
  projectId: "myshop-8b686",
  storageBucket: "myshop-8b686.appspot.com",
  messagingSenderId: "1009866489768",
  appId: "1:1009866489768:web:6648c2e851affb7d57279d",
};
const app = initializeApp(firebaseConfig);
// Firebase -

export const getFirebase = () => {
  return app;
};

export const db = getFirestore(app);
