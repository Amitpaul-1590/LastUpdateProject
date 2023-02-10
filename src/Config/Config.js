import { configure } from '@testing-library/react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDxtWgUHJjyzJXYqwgCIT4oIw0iVgJnCbg",
    authDomain: "project-716fb.firebaseapp.com",
    databaseURL: "https://project-716fb-default-rtdb.firebaseio.com",
    projectId: "project-716fb",
    storageBucket: "project-716fb.appspot.com",
    messagingSenderId: "494813615058",
    appId: "1:494813615058:web:27644cb23301b92ea8ee0b"
};

const app =  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}
export const db = getFirestore(app);

