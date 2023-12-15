import * as dotenv from "dotenv";

dotenv.config();

const configENV = {
    mongo: {
        options: {
            socketTimeoutMS: 300000,
            maxPoolSize: 50,
            autoIndex: false,
            retryWrites: false,
        },
        url: process.env.DATABASE_URL as string,
    },
    PORT: process.env.PORT as string,
    JWT_KEY: process.env.JWT_SECRET as string,
    API_KEY: process.env.NEXT_PUBLIC_API_KEY as string,
    AUTH_DOMAIN: process.env.NEXT_PUBLIC_AUTH_DOMAIN as string,
    PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID as string,
    STORAGE_BUCKET: process.env.NEXT_PUBLIC_STORAGE_BUCKET as string,
    MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID as string,
    APP_ID: process.env.NEXT_PUBLIC_APP_ID as string,
    MEASUREMENT_ID: process.env.NEXT_PUBLIC_MEASUREMENT_ID as string,
};

export default configENV;
