import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import Stripe from "stripe";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log("Error is", error);
            setError(error.message);
        } else {
            console.log("Payment Method", paymentMethod);
            setError("");
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button className="btn" type="submit" disabled={!Stripe}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
            </form>
        </div>
    );
};

export default CheckOut;
