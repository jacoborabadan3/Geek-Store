// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMKMslRxoO0mREtxXTtXk0Uw4c70KyRPo",
    authDomain: "cubestore-coderhouse.firebaseapp.com",
    projectId: "cubestore-coderhouse",
    storageBucket: "cubestore-coderhouse.appspot.com",
    messagingSenderId: "933348542056",
    appId: "1:933348542056:web:10053fa751f07bffb75ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);