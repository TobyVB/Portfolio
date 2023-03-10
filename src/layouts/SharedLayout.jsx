import Navbar from "../Navbar";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const SharedLayout = () => {
  const contentRef = useRef();

  return (
    <div>
      <Navbar />
      <main
        style={{
          width: "100vw",
          backgroundColor: "rgba(80, 180, 255, .85)",
        }}
      >
        <div className="parallax">
          <div
            className="parallax-layer layer2"
            style={{
              opacity: "20%",
              backgroundPosition: "center",
              backgroundImage: "url(../../public/clouds.png)",
              height: `${
                contentRef.current !== undefined
                  ? contentRef.current.scrollHeight / 1.2
                  : 400
              }px`,
            }}
          ></div>
          <div
            ref={contentRef}
            className="parallax-layer layer1"
            style={{ padding: "0 5em" }}
          >
            <Outlet />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};
export default SharedLayout;
