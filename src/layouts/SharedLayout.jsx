import Navbar from "../Navbar";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <main
        style={{
          width: "100vw",
        }}
      >
        <div className="parallax">
          <div
            className="parallax-layer layer2"
            style={{
              backgroundImage: "url(../../public/star.png)",
            }}
          ></div>
          <div className="parallax-layer layer1" style={{ padding: "0 5em" }}>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default SharedLayout;
