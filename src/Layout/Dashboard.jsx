import {  GiBookmarklet, GiCalendar, GiHouse, GiMeal, GiRead, GiShoppingBag, GiShoppingCart } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    
                    <li><NavLink to='/dashboard/cart'><GiShoppingCart></GiShoppingCart> My Cart <div className="badge badge-secondary">{cart.length}</div> </NavLink></li>
                    <li><NavLink to='/dashboard/userHome'><GiHouse></GiHouse> My Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><GiCalendar></GiCalendar> My Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/review'><GiRead></GiRead> My Review</NavLink></li>
                    <li><NavLink to='/dashboard/review'><GiBookmarklet></GiBookmarklet> My Bookings</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><GiHouse></GiHouse> Home</NavLink></li>
                    <li><NavLink to='/menu'><GiMeal></GiMeal> Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><GiShoppingBag></GiShoppingBag> Order Now</NavLink></li>
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