import { Outlet } from "react-router-dom";
import Navbar from "../components/General/Navbar";
import Footer from "../components/General/Footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
