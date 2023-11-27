import { useForm } from "react-hook-form";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import { FaUtensils } from "react-icons/fa";

const AddItem = () => {
   const { register, handleSubmit } = useForm();
   const onSubmit = (data) => console.log(data);
   return (
      <div>
         <SectionHeading
            heading="Add an Item"
            subHeading="What's New"
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
                        className="select w-full input-bordered"
                     >
                        <option disabled selected>
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
                     placeholder="Type the Price"
                     {...register("recipe")}
                     className="textarea w-full textarea-bordered"
                     required
                  />
               </div>
               <div className="form-control w-full mt-5">
                  <input type="file" {...register("image")} className="file-input w-full" />
               </div>
               <button className="btn mt-5 w-full">Add Item <FaUtensils></FaUtensils> </button>
            </form>
         </div>
      </div>
   );
};

export default AddItem;
