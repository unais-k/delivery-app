import connectDB from "@/lib/mongooseConnect";
import User from "@/model/userSchema";
import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body, "userData route Page");
    console.log(typeof req.body.phone);
    try {
        await connectDB();
        if (req.method !== "POST") {
            res.status(400).json({
                isError: true,
                msg: `${req.method} request is not possible on this route`,
            });
            return;
        }

        let findUser = await User.findOne({ phone: req.body.phone });
        console.log(findUser);
        if (findUser !== null) {
            res.status(200).json({
                isError: false,
                isSuccess: false,
                msg: "User with same phone number already exists",
            });
            return;
        }

        let salt = await bcrypt.genSalt();
        let hashedPassword = await bcrypt.hash(req.body.password!, salt);
        let user = await User.create({
            fullName: req.body.fullName,
            phone: req.body.phone,
            password: hashedPassword,
        });

        res.status(200).json({
            isError: false,
            isSuccess: true,
            msg: "Sign up Successful",
            userData: user,
        });
    } catch (error: any) {
        console.log(error.message, "=======");
        res.json({ error: error.message });
    }
}
