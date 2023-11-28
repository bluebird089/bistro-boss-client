import { FaEdit, FaTrash } from "react-icons/fa";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (id) => {
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
                axiosSecure.delete(`/menu/${id}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        refetch();
                    }
                });
            }
        });
    };

    return (
        <div>
            <SectionHeading
                heading="Manage Item"
                subHeading="Hurry Up"
            ></SectionHeading>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item.image}
                                                    alt="Food Image"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.price}$</td>
                                    <td>
                                        <Link to={`/dashboard/updateItems/${item._id}`} className="btn btn-ghost">
                                            <FaEdit className="text-orange-500 text-lg"></FaEdit>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDeleteItem(item._id)
                                            }
                                            className="btn btn-ghost"
                                        >
                                            <FaTrash className="text-red-600 text-lg"></FaTrash>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
