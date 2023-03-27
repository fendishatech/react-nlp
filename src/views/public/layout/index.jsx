import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen flex justify-center items-center">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};

export default PublicLayout;
