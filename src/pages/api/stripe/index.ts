import { NextApiRequest, NextApiResponse } from "next";
import stripe from "stripe";

const stripeSecretKey =
    "sk_test_51OdCP7SH1BYBMIKlQCChuqNnng4yZXO48dQSG5dHDyglnpAfEz9UnYo9qbqSdhoNxgQKBTfEx5v7UQjBsl1SYt2E00wNa8D8kS";
const stripeInstance = new stripe(stripeSecretKey);

// const YOUR_DOMAIN = "http://localhost:3000"; // Update with your actual domain

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === "POST") {
//         try {
//             const session:any = await stripeInstance.checkout.sessions.create({
//                 line_items: [
//                     {
//                         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//                         price: "{{PRICE_ID}}",
//                         quantity: 1,
//                     },
//                 ],
//                 mode: "payment",
//                 success_url: `${YOUR_DOMAIN}/success.html`,
//                 cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//             });

//             res.redirect(303, session.url);
//         } catch (error) {
//             console.error("Error creating checkout session:", error);
//             res.status(500).json({ error: "Internal Server Error" });
//         }
//     } else {
//         res.setHeader("Allow", "POST");
//         res.status(405).end("Method Not Allowed");
//     }
// };
// // 

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripeInstance.paymentIntents.create({
    amount: 400,
    currency: "in",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    // automatic_payment_methods: {
    //   enabled: true,
    // },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });

};