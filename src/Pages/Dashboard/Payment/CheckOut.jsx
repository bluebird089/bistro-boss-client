import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        axiosSecure
            .post("/create-payment-intent", {
                price: totalPrice,
            })
            .then((res) => {
                console.log(res.data);
                setClientSecret(res.data.clientSecret);
            });
    }, [axiosSecure, totalPrice]);

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

        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "anonymous",
                        name: user?.displayName || "anonymous",
                    },
                },
            });

        if (confirmError) {
            console.log("confirm error");
        } else {
            console.log("payment intent", paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("Transaction Id", paymentIntent.id);
                setTransactionId(paymentIntent.id);
            }
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
                <button
                    className="btn"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
                <p className="text-red-600">{error}</p>

                {transactionId && (
                    <p className="text-green-600">
                        Payment Successful Your Transaction Id {transactionId}
                    </p>
                )}
            </form>
        </div>
    );
};

export default CheckOut;
