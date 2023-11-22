import { useForm } from "react-hook-form";
import SectionTitle from "../../../../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="--- What's new? ---"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
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
              <span className="label-text">Category Name*</span>
            </label>
            <select
              {...register("category")}
              required
              className="select select-bordered w-full "
            >
              <option disabled selected>
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
              <span className="label-text">Price*</span>
            </label>
            <input
              type="text"
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
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
          {...register("recipe")}
          required
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-full my-6">
        <input {...register("image")} required type="file" className="file-input w-full max-w-xs" />
        </div>

        <button className="btn">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
        </button>

      </form>
    </div>
  );
};

export default AddItems;
