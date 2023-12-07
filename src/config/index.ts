import * as dotenv from "dotenv";

dotenv.config();

const configENV = {
    PORT: process.env.PORT as string,
    JWT_KEY: process.env.JWT_SECRET as string,
    API_KEY: process.env.API_KEY as string,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN as string,
    PROJECT_ID: process.env.PROJECT_ID as string,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET as string,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID as string,
    APP_ID: process.env.APP_ID as string,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID as string,
};

export default configENV;
