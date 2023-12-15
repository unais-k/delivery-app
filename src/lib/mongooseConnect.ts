import configENV from "@/config";
import mongoose from "mongoose";

const connectDB = async () => {
    console.log("hey from mongo");
    try {
        mongoose
            .connect(configENV.mongo.url, configENV.mongo.options)
            .then(() => {
                console.log("Mongo connected.");
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error: any) {
        console.log("mongo not connected");
        console.error(error);
    }
};
export default connectDB;
