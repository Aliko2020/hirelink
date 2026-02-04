import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <main className="flex-1 mx-auto w-full">
      <Outlet />
    </main>

    <Footer />
  </div>
);

export default Layout;
