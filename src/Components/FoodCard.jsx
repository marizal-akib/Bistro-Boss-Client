

const FoodCard = ({item}) => {
    const {image, name, price , recipe} = item
    return (
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-3 p-1">${price}</p>
        <div className="card-body text-center">
          <h2 className="card-title justify-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions  justify-center">
            <button className="btn btn-outline mt-3 border-b-4 border-orange-400 bg-slate-100">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;