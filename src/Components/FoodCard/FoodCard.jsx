import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { name, image, price, recipe, _id } = item;
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
            };
            axiosSecure.post("/cart", cartItem).then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: `${name} Added Successfully`,
                        icon: "success",
                    });
                }
            });
        } else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please Log In To Add Food To Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log In",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
        }
    };
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img className="w-full" src={image} alt="Food" />
            </figure>
            <p className="bg-black text-white absolute top-5 right-5 p-2 rounded-sm">
                ${price}
            </p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
