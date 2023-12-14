/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        firebaseConfig1: {
            apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
            messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
            appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
            measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
        },
    },
};

module.exports = nextConfig;
