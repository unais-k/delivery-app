import { NextApiRequest, NextApiResponse } from 'next';
import stripe from 'stripe';

const stripeSecretKey = 'sk_test_51OWccDSCJk1uToLzAXLjkM2wEfC0VLeZZ9BNXyesKv1sOBZbYhIU8uGaaptNtKfo4VNbS5PXgn7LpkSr8sf0DIoI00a9gXFBGp';
const stripeInstance = new stripe(stripeSecretKey);

const YOUR_DOMAIN = 'http://localhost:3000'; // Update with your actual domain

export default async (req: NextApiRequest, res: NextApiResponse) => {






  if (req.method === 'POST') {
    try {
      const session = await stripeInstance.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: '{{PRICE_ID}}',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
      });

      res.redirect(303, session.url);
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
