import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNEHVBgM8xSsqJ1CEKb9gMPLwBHTqwRoQ",
  authDomain: "playablefactory-6899d.firebaseapp.com",
  projectId: "playablefactory-6899d",
  storageBucket: "playablefactory-6899d.appspot.com",
  messagingSenderId: "159702303962",
  appId: "1:159702303962:web:c9380ba6559633d7df51e3",
  measurementId: "G-FC91KC266Y",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
