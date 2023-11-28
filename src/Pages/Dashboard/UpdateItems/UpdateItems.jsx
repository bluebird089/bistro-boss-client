import { useForm } from "react-hook-form";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";

const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const UpdateItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const { name, recipe, price, _id } = useLoaderData();

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(imageHostingApi, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,
            };
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data);
            if (menuRes.data.modifiedCount > 0) {
                reset();
                Swal.fire({
                    title: "Success",
                    text: "Updated Food Successfully",
                    icon: "success",
                });
            }
        }
        console.log(res.data);
    };

    return (
        <div>
            <SectionHeading
                heading="Update an Item"
                subHeading="Refresh Info"
            ></SectionHeading>
            <div className="p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type Recipe Name"
                            defaultValue={name}
                            {...register("name")}
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="flex gap-5 w-full">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                {...register("category")}
                                defaultValue="default"
                                className="select w-full input-bordered"
                            >
                                <option value="default" disabled>
                                    Select a Category
                                </option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="Desert">Desert</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type the Price"
                                defaultValue={price}
                                {...register("price")}
                                className="input w-full input-bordered"
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Recipe</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="Type the Recipe"
                            defaultValue={recipe}
                            {...register("recipe")}
                            className="textarea w-full textarea-bordered"
                            required
                        />
                    </div>
                    <div className="form-control w-full mt-5">
                        <input
                            type="file"
                            {...register("image")}
                            className="file-input w-full"
                        />
                    </div>
                    <button className="btn mt-5 w-full">
                        Update Item <FaUtensils></FaUtensils>{" "}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItems;
