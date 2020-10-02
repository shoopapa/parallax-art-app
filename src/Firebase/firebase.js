import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBS80nTMy6fGWvydIHYM4P5dE_czOBF2U",
  authDomain: "parallax-art.firebaseapp.com",
  databaseURL: "https://parallax-art.firebaseio.com",
  projectId: "parallax-art",
  storageBucket: "parallax-art.appspot.com",
  messagingSenderId: "359463380945",
  appId: "1:359463380945:web:bd20bac823da05910622f0",
  measurementId: "G-F7CSSCZWB8"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,provider,firebase}