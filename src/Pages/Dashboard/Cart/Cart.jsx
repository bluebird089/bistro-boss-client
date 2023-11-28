import { FaTrash } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDeleteCart = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                    }
                });
            }
        });
    };

    return (
        <div className="p-10">
            <div className="flex justify-evenly">
                <div>
                    <h3 className="text-3xl">Cart Item: {cart.length}</h3>
                </div>
                <div>
                    <h3 className="text-3xl">Total Price: {totalPrice}</h3>
                </div>
                {cart?.length ? (
                    <Link to="/dashboard/payment">
                        <button className="btn">Pay</button>
                    </Link>
                ) : (
                    <button disabled className="btn">
                        Pay
                    </button>
                )}
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, idx) => (
                                <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Food Image"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    Hart Hagerty
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    United States
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                    <th>
                                        <button
                                            onClick={() =>
                                                handleDeleteCart(item._id)
                                            }
                                            className="btn btn-ghost"
                                        >
                                            <FaTrash className="text-red-600 text-lg"></FaTrash>
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;
