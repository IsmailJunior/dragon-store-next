import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
	apiKey: "AIzaSyDJFM7AArFvXcgrwesJpUCNY9_91S4yzzg",
	authDomain: "dragon-website-e93cb.firebaseapp.com",
	projectId: "dragon-website-e93cb",
	storageBucket: "dragon-website-e93cb.appspot.com",
	messagingSenderId: "286569264519",
	appId: "1:286569264519:web:9bf7a31570c020c7054f22"
};
const app = initializeApp( firebaseConfig );
export const store = getFirestore( app );
export const storage = getStorage( app );