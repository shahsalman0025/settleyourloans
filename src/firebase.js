import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const onAuthStateChanged = firebase.auth().onAuthStateChanged;
export const collection = firebase.firestore().collection;
export const onSnapshot = firebase.firestore().onSnapshot;
