import { Outlet } from "react-router-dom";
import Footer from "../pages/Sheard/Footer/Footer";
import Navbar from "../pages/Sheard/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
