import connectDB from "@/lib/mongooseConnect";
import User from "@/model/userSchema";
import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    console.log(req.body, "userData signUp page");
    try {
        if (req.method !== "POST") {
            res.status(400).json({
                isError: true,
                msg: `${req.method} request is not possible on this route`,
            });
            return;
        }

        let findUser = await User.findOne({ email: req.body.email }).lean().exec();
        if (findUser !== null) {
            res.status(200).json({
                isError: false,
                isSuccess: false,
                msg: "User with same email already exists",
            });
            return;
        }

        // let salt = await bcrypt.genSalt();
        // let hashedPassword = await bcrypt.hash(req.body.password!, salt);
        // let user = await User.create({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: hashedPassword,
        //     salt,
        // });

        // res.status(200).json({
        //     isError: false,
        //     isSuccess: true,
        //     msg: "Sign up Successful",
        //     userData: user,
        // });
    } catch (error: any) {
        console.log(error.message, "=======");
        res.json({ error: error.message });
    }
}
