import configENV from "@/config";
import firebase from "firebase/compat/app";
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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebaseAuth = firebase.auth();
export default firebase;
