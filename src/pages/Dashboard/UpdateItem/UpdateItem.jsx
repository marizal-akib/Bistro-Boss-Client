import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const item = useLoaderData()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
      console.log(data);
      const imageFile = {image: data.image[0] }
      const res = await axiosPublic.post(image_hosting_api,imageFile, {
         
         headers:{
           'content-type': 'multipart/form-data'
          },
          
      });
      if(res.data.success){
          const menuItem = {
              name: data.name,
              category: (data.category).toLowerCase(),
              price: parseFloat(data.price),
              recipe: data.recipe,
              image: res.data.data.display_url
          }
          const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
          console.log(menuRes.data);
          if (menuRes.data.modifiedCount > 0) {
              reset()
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${data.name} is updated to the menu`,
                  showConfirmButton: false,
                  timer: 1500
                });
  
          }
      }
      console.log(res.data);
    };
    return (
        <div>
        <SectionTitle
          heading="Update item"
          subHeading="--- What's new? ---"
        ></SectionTitle>
        <div className="p-6 bg-slate-200 w-4/5 mx-auto mb-9">
       <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text font-bold">Recipe Name*</span>
            </label>
            <input
              type="text"
              defaultValue={item.name}
              placeholder="Recipe Name"
              {...register("name")}
              required
              className="input input-bordered w-full max-full "
            />
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">Category Name*</span>
              </label>
              <select
                {...register("category")}
                required
                defaultValue={item}
                className="select select-bordered w-full "
              >
                <option  disabled value="def">
                  Select a Category
                </option>
                <option>Salad</option>
                <option>Pizza</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text font-bold">Price*</span>
              </label>
              <input
                type="text"
                defaultValue={item.price}
                placeholder="Price"
                {...register("price")}
                required
                className="input input-bordered w-full max-full "
              />
            </div>
          </div>
            {/* details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Recipe Details</span>
            </label>
            <textarea
            {...register("recipe")}
            required
              className="textarea textarea-bordered h-24"
              defaultValue={item.recipe}
              placeholder="Bio"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
          <input {...register("image")} required type="file" className="file-input w-full max-w-xs" />
          </div>
  
          <button className="btn text-white bg-gradient-to-r rounded-none from-orange-800 from-10% via-orange-700 via-30% to-orange-500 to-90% ...">
              Add Item <FaEdit className="ml-4"></FaEdit>
          </button>
  
        </form>   
        </div>
        
      </div>
    );
};

export default UpdateItem;