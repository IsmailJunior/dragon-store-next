import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
	apiKey: "AIzaSyBcL8_URVD3YmHZhsJAYiy8h1fNMuKazWs",
	authDomain: "next-store-6c35c.firebaseapp.com",
	projectId: "next-store-6c35c",
	storageBucket: "next-store-6c35c.appspot.com",
	messagingSenderId: "822369568592",
	appId: "1:822369568592:web:5307cb657c8ce413a68e55"
};
const app = initializeApp( firebaseConfig );
export const store = getFirestore( app );
export const storage = getStorage( app );