import connectDB from "@/lib/mongooseConnect";
import User from "@/model/userSchema";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    let updatedUser;

    if (req.method === "POST") {
        try {
            const { action, product } = req.body;

            if (action === "add") {
                const objectId = new mongoose.Types.ObjectId(product.user);

                const user = await User.findOne({ _id: objectId });
                const product_id = product._id;


                if (user) {
                    const existingProduct = await User.findOne({
                        _id: objectId,

                        "cart.product":product_id,

                    });

                    if (existingProduct) {
                        updatedUser = await User.findOneAndUpdate(
                            { _id: objectId, "cart.product": product._id },
                            { $inc: { "cart.$.unit": 1 } },
                            { new: true }
                        ).populate("cart.product");
                    } else {
                        updatedUser = await User.findOneAndUpdate(
                            { _id: objectId },
                            { $addToSet: { cart: { product, unit: 1 } } },
                            { new: true }
                        ).populate("cart.product");
                    }
                    res.status(200).json({ status: "success", data: updatedUser });
                } else {
                    res.status(404).json({ error: "User not found" });
                }
            } else if (action === "increment") {

                const { userId, _id } = product;
                updatedUser = await User.findOneAndUpdate(
                    { _id: userId, "cart.product": _id },
                    { $inc: { "cart.$.unit": 1 } },
                    { new: true }
                ).populate("cart.product");
                res.status(200).json({ status: "success", data: updatedUser });
            } else if (action === "decrement") {
                const { userId, _id } = product;
                const user = await User.findOne({ _id: userId });

                const cartData = user?.cart;
                // let thatProduct = cartData?.filter((item) => (item.product as mongoose.Types.ObjectId).equals(_id));
                let thatProduct = cartData?.filter((id) => new mongoose.Types.ObjectId(id?.product as any) == _id);

                if (thatProduct && thatProduct.length > 0) {
                    if (thatProduct[0].unit === 1) {
                        updatedUser = await User.findOneAndUpdate(
                            { _id: userId, "cart.product": _id },
                            { $inc: { "cart.$.unit": 0 } },
                            { new: true }
                        ).populate("cart.product");
                        res.status(200).json({ status: "success", data: updatedUser });
                    } else {
                        updatedUser = await User.findOneAndUpdate(
                            { _id: userId, "cart.product": _id },
                            { $inc: { "cart.$.unit": -1 } },
                            { new: true }
                        ).populate("cart.product");
                        res.status(200).json({ status: "success", data: updatedUser });
                    }
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

        try {
            const updated = await User.updateOne({ _id: userId }, { $pull: { cart: { product: _id } } });
            console.log(updated,'dlting cart item')

            if (updated?.modifiedCount > 0) {
                const updatedUser = await User.findById(userId).populate("cart.product");

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
