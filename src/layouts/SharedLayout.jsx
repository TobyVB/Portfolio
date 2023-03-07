import Navbar from "../Navbar";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        test
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default SharedLayout;
