import configENV from "@/config";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import getConfig from "next/config";
import { getAuth } from "firebase/auth";

const { publicRuntimeConfig } = getConfig();
const { firebaseConfig1 } = publicRuntimeConfig;

const app = initializeApp(firebaseConfig1);
export const auth = getAuth(app);
