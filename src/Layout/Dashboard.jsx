import {
  GiBookmarklet,
  GiCalendar,
  GiCardboardBoxClosed,

  GiEnvelope,
  GiHouse,

  GiMeal,
  GiRead,
  GiShoppingBag,
  GiShoppingCart,
  GiWallet,
} from "react-icons/gi";
import { FaList, FaUsers } from "react-icons/fa";
  import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <GiHouse></GiHouse> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <GiCardboardBoxClosed></GiCardboardBoxClosed> Add items{" "}
                  
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
               <li>
                <NavLink to="/dashboard/bookings">
                  <GiBookmarklet></GiBookmarklet> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/dashboard/cart">
                  <GiShoppingCart></GiShoppingCart> My Cart{" "}
                  <div className="badge badge-secondary">{cart.length}</div>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <GiWallet></GiWallet> Payment History
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/cart">
                  <GiShoppingCart></GiShoppingCart> My Cart{" "}
                  <div className="badge badge-secondary">{cart.length}</div>{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userHome">
                  <GiHouse></GiHouse> My Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <GiCalendar></GiCalendar> My Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <GiRead></GiRead> My Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <GiWallet></GiWallet> Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <GiHouse></GiHouse> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <GiMeal></GiMeal> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <GiShoppingBag></GiShoppingBag> Order Now
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <GiEnvelope className="text-lg"></GiEnvelope>Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
