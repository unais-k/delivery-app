import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { Button } from "../modules/ui/Button";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    "pk_test_51OWccDSCJk1uToLz2484ReTvj1UsX9ntKtyAEyOI3jE9jI4pKyYCyuysjvz9NeLE23TynJ9ESUoJ553h5Uq3HjqA00ObFwL4bO"
);
export default function Stripe() {
    React.useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
            console.log("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            console.log("Order canceled -- continue to shop around and checkout when you’re ready.");
        }
    }, []);

    const handleCheckout = async () => {
        await axios.post("/api/stripe");
    };

    return (
        <div>
            <section className="w-full flex justify-start md:ps-0 ps-2">
                <Button
                    onClick={handleCheckout}
                    type="submit"
                    className="bg-gray-800 cursor-pointer font-medium h-12 leading-[normal] py-[15px] text-center text-lg text-white-A700 w-[171px]"
                >
                    Checkout
                </Button>
            </section>
            {/* <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: fit-content;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style> */}
        </div>
    );
}
