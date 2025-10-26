import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


const firebaseConfig ={
    apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN_FIREBASE,
    projectId: import.meta.env.VITE_PROJECT_ID_FIREBASE,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET_FIREBASE,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_FIREBASE,
    appId: import.meta.env.VITE_APP_ID_FIREBASE,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID_FIREBASE,
};

const appFirebase = initializeApp(firebaseConfig);
export const analytics = getAnalytics(appFirebase);
export const authFirebase = getAuth(appFirebase);