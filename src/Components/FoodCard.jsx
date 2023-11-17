import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { axiosSecure } from "../hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
  const { image, name, price, recipe, _id} = item;
  const { user } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();



  const handleAddToCart = (food) => {
    
    if (user && user.email ) {  
      console.log(food,user?.email);
      const cartItem ={
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post("carts",cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end", 
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from: location}});
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3 p-1">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="card-title justify-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions  justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline mt-3 border-b-4 border-orange-400 bg-slate-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
