/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Sheard/Cover/Cover";
import MenuItem from "../../Sheard/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="my-16 py-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 px-8 mx-16 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="ml-3">

      <Link to={`/order/${title}`} className="btn btn-outline mt-3 border-b-4">Order Now</Link>
      </div>
    </div>
  );
};

export default MenuCategory;
