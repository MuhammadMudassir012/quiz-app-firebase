import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOwargVcGjrO5KpN2XvNEdexhV2zK1Sm8",
  authDomain: "smit-authentication.firebaseapp.com",
  projectId: "smit-authentication",
  storageBucket: "smit-authentication.appspot.com",
  messagingSenderId: "900446899941",
  appId: "1:900446899941:web:241ecf4c2b7c0fc1fa0e0c",
  measurementId: "G-FH3FJNKHCG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);