import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbla0M-wV1NCh0Wp6AGoDDJ1W2bqE3qCo",
  authDomain: "twitter-3888f.firebaseapp.com",
  projectId: "twitter-3888f",
  storageBucket: "twitter-3888f.appspot.com",
  messagingSenderId: "291279960953",
  appId: "1:291279960953:web:49bd6021aab6cf0b694da8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth alanının referansını alma
export const auth = getAuth(app);

// google sağlayıcısı oluşturma
export const provider = new GoogleAuthProvider();

// veri tabanının referansını alma
export const db = getFirestore(app);

// medya depolama alanının referansını alma
export const storage = getStorage(app);
