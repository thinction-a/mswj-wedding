import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// 🔹 여기에 콘솔에서 복사한 config를 붙여넣으세요
const firebaseConfig = {
  apiKey: "AIzaSyB5-uzFsBEE4srolu5VxaBWKGEO11jxelA",
  authDomain: "mswj-wedding.firebaseapp.com",
  projectId: "mswj-wedding",
  storageBucket: "mswj-wedding.firebasestorage.app",
  messagingSenderId: "1044780621691",
  appId: "1:1044780621691:web:6330738e28504eb6e0e7de",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const storage = getStorage(app);
