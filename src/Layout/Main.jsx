import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Sheard/Footer/Footer";
import Navbar from "../pages/Sheard/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
