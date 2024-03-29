import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongooseConnect";
import User from "@/model/userSchema";
import configENV from "@/config";
import { setCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectDB();
        if (req.method !== "POST") {
            res.status(400).json({
                isError: true,
                msg: `${req.method} request is not possible on this route`,
            });
            return;
        }

        const { phone, password } = req.body;

        const user = await User.findOne({ phone: phone });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (user.phone === phone && isMatch) {
                const ID = user._id;
                const token = jwt.sign({ ID }, configENV.JWT_KEY, {
                    expiresIn: 3000000,
                });
                setCookie("apiKey", token,{ req, res, maxAge: 60 * 60 * 24 });
                setCookie("userId", ID,{ req, res, maxAge: 60 * 60 * 24 });

                res.status(200).json({
                    status: true,
                    token: token,
                    result: user,
                    message: "login success",
                });
            } else {
                res.status(200).json({ status: false, message: "User password is incorrect" });
            }
        } else {
            res.status(200).json({ status: false, message: "User phone is incorrect" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
