import configENV from "@/config";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: configENV.API_KEY,
    authDomain: configENV.AUTH_DOMAIN,
    projectId: configENV.PROJECT_ID,
    storageBucket: configENV.STORAGE_BUCKET,
    messagingSenderId: configENV.MESSAGING_SENDER_ID,
    appId: configENV.APP_ID,
    measurementId: configENV.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
