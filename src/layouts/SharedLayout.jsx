import Navbar from "../Navbar";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <main
        style={{
          width: "100vw",
          // backgroundColor: "rgba(80, 180, 255, .85)",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};
export default SharedLayout;
