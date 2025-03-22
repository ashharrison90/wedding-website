import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChVmS9BaOaevOs1AIpxrm9Sufo6owC3Ik",
  authDomain: "wedding-rsvps-ca5d9.firebaseapp.com",
  projectId: "wedding-rsvps-ca5d9",
  storageBucket: "wedding-rsvps-ca5d9.firebasestorage.app",
  messagingSenderId: "214582708539",
  appId: "1:214582708539:web:7a1cc2f7ff221fef048f1e",
  measurementId: "G-XFL2ZV6XB2"
};

export const app = initializeApp(firebaseConfig);