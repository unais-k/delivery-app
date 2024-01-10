// pages/api/checkout.ts
import { Order } from '@/model/orderSchema';
import { NextApiRequest, NextApiResponse } from 'next';
import stripe from 'stripe';
import connectDB from "@/lib/mongooseConnect";

const stripeSecretKey = 'sk_test_51OWccDSCJk1uToLzAXLjkM2wEfC0VLeZZ9BNXyesKv1sOBZbYhIU8uGaaptNtKfo4VNbS5PXgn7LpkSr8sf0DIoI00a9gXFBGp';
const stripeClient = new stripe(stripeSecretKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
  if (req.method === 'POST') {
    const {cartItem,formData } = req.body;
    const{email}=formData


    try {
      const line_items = cartItem.map((item: any) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.product.title, // Assuming each product in your cart has a 'name' property
          },
          unit_amount:10 * 100, // Stripe expects the amount in cents
        },
        quantity: item.unit,
      }));
     
   
     

        const order = await Order.create({ line_items, address:formData});
        
        const session = await stripeClient.checkout.sessions.create({
            
            line_items,
            customer_email:email,
            mode: 'payment',
            success_url: 'http://localhost:3000',
            cancel_url: 'http://localhost:3000/cart',
            metadata:{orderId:order._id.toString()}
        });
        const url=session.url
        res.status(200).json({ order,url });

     
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
