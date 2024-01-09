import connectDB from "@/lib/mongooseConnect";
import User from "@/model/userSchema";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { title } from "process";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    let updatedUser;

    if (req.method === "POST") {
        try {
            const { action, product } = req.body;
            // console.log(product,"body");
            if (action === "add") {
                const objectId = new mongoose.Types.ObjectId(product.user);


                const user = await User.findOne({ _id: objectId });
                // console.log(user);
                const productId = product._id;

                if (user) {
                    const existingProduct = await User.findOne({
                        _id: objectId,
                        "wishlist.product": product._id,
                    });
                    console.log(existingProduct,"exist")

                    if (existingProduct) {
                        console.log("pp");
                        updatedUser = await User.findOne(
                            { _id: objectId, "wishlist.product": product._id },
                            { new: true }
                        ).populate("wishlist.product");
                    } else {
                        console.log('hh');
                        console.log(product,productId);
                        updatedUser = await User.findOneAndUpdate(
                            { _id: objectId },
                            { $addToSet: { wishlist: { product:productId } } },
                            { new: true }
                        )
                    }
                    console.log(updatedUser,"uuuuuuuuuuuuuuu");
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
        const { userId, _id } = req.query;
        console.log('hey');
        console.log(req.query,"000000000000000000000000000000000000000000000");

        try {
            const updated = await User.updateOne({ _id: userId }, { $pull: { wishlist: { product: _id } } });

            if (updated?.modifiedCount > 0) {
                const updatedUser = await User.findById(userId).populate("wishlist.product");

                res.status(200).json({ status: "success", data: updatedUser });
            } else {
                res.status(400).json({ error: "Invalid action" });
            }
        } catch (error) {
            console.error("Error updating cart:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
