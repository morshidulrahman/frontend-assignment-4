import Footer from "@/pages/Footer";
import { Outlet } from "react-router-dom";
import NavbarComponent from "@/components/home/HeroandNav";
const Layout = () => {
  return (
    <>
      <NavbarComponent />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
