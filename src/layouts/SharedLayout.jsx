import Navbar from "../Navbar";

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
        <Outlet />
      </main>
    </div>
  );
};
export default SharedLayout;
