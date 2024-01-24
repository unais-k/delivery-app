import connectDB from "@/lib/mongooseConnect";
import User from "@/model/userSchema";
import { getCookies } from "cookies-next";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    let updatedUser;
    const cook = getCookies({ req, res })
    const userId = new mongoose.Types.ObjectId(cook.userId);
    

    if (req.method === "POST") {
        try {
            const { action, product } = req.body;
            // console.log(product,"body");
            if (action === "add") {


                const user = await User.findOne({ _id: userId });
                const productId = product._id;

                if (user) {
                    const existingProduct = await User.findOne({
                        _id: userId,
                        "wishlist.product": product._id,
                    });

                    if (existingProduct) {
                        updatedUser = await User.findOne(
                            { _id: userId, "wishlist.product": product._id },
                            { new: true }
                        ).populate("wishlist.product");
                    } else {
                        updatedUser = await User.findOneAndUpdate(
                            { _id: userId },
                            { $addToSet: { wishlist: { product: productId } } },
                            { new: true }
                        ).populate("wishlist.product");
                    }
                    console.log(updatedUser);
                    res.status(200).json({ status: "success", data: updatedUser });
                } else {
                    res.status(404).json({ error: "User not found" });
                }
            } else {
                res.status(400).json({ error: "Invalid action" });
            }
        } catch (error) {
            console.error("Error updating cart:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else if (req.method === "DELETE") {
        const { _id } = req.query;

        try {
            const updated = await User.updateOne({ _id: userId }, { $pull: { wishlist: { product: _id } } });

            if (updated?.modifiedCount > 0) {
                const updatedUser = await User.findById(userId).populate("wishlist.product");

                res.status(200).json({ status: "success", data: updatedUser });
            } else {
                res.status(400).json({ error: "Invalid action" });
            }
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
