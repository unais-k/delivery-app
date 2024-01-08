import connectDB from "@/lib/mongooseConnect";
import User from "@/model/userSchema";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    console.log("aaaaaaaaai cart")
    if (req.method === 'POST') {
        try {
            console.log("aaaaaaaaai cart")
            const { action, product } = req.body;
          const objectId =new  mongoose.Types.ObjectId(product.user);
          if (action === 'add') {
              // Handle adding product to the cart
              const user = await User.findOne({_id:objectId});
              const product_id= product._id
            let  updatedUser;
              if (user) {
             
                const existingProduct = await User.findOne({ _id:objectId, 'cart.product': product._id });

                if (existingProduct) {
                     updatedUser = await User.findOneAndUpdate(
                    { _id: objectId, 'cart.product': product._id },
                    { $inc: { 'cart.$.unit': 1 } },
                    { new: true }
                  ).populate('cart.product')
            
                } else {
                 
                  updatedUser = await User.findOneAndUpdate(
                    { _id: objectId },
                    { $addToSet: { cart: { product, unit: 1 } } },
                    { new: true }
                  ).populate('cart.product')
            
                 
                }
                res.status(200).json({ status: 'success',data:updatedUser });
              } else {
                res.status(404).json({ error: 'User not found' });
              }
            } else {
              res.status(400).json({ error: 'Invalid action' });
            }
          } catch (error) {
            console.error('Error updating cart:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    } else if (req.method === 'PUT') {
     
    } else if (req.method === 'DELETE') {
    
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }