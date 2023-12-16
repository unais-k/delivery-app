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
            // apiKey: "AIzaSyDhaLUFB-vS7vrWvvia3bzA7-JdMmhXglE",
            // authDomain: "fir-74b6b.firebaseapp.com",
            // projectId: "fir-74b6b",
            // storageBucket: "fir-74b6b.appspot.com",
            // messagingSenderId: "374515343480",
            // appId: "1:374515343480:web:234b9ac148d43125008d8d",
        },
    },
};

module.exports = nextConfig;
