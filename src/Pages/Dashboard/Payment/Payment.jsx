import { Elements } from "@stripe/react-stripe-js";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import { loadStripe } from "@stripe/stripe-js";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
const Payment = () => {
    return (
        <div>
            <SectionHeading
                heading="Payment"
                subHeading="Please Pay to eat"
            ></SectionHeading>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
