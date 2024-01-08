import connectDB from "@/lib/mongooseConnect";
import User from "@/model/userSchema";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    console.log("aaaaaaaaai cart")
    if (req.method === 'POST') {
        try {
            const { action, product } = req.body;
      
            if (action === 'add') {
              // Handle adding product to the cart
              const user = await User.findOne({ /* your query to find the user */ });
      
              if (user) {
                // Assuming user.cart is an array field in your User schema
                user.cart.push(product);
                await user.save();
      
                res.status(200).json({ status: 'success' });
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
      // Handle updating product quantity in the cart
      // ...
    } else if (req.method === 'DELETE') {
      // Handle removing product from the cart
      // ...
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }