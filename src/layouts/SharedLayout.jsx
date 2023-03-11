import Navbar from "../Navbar";
import Footer from "../Footer";

import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const SharedLayout = () => {
  const contentRef = useRef();

  // cause a state change so the newly assigned contentRef
  // scroll height that is passed into the layer's style is updated
  // in the final render
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setUpdate(true);
  }, [contentRef]);

  return (
    <div>
      <Navbar />
      <main
        style={{
          width: "100vw",
          // backgroundColor: "rgba(80, 180, 255, .85)",
        }}
      >
        <div className="parallax">
          <div
            className="parallax-layer layer2"
            style={{
              opacity: "25%",
              backgroundPosition: "center",
              backgroundImage: "url(../../public/canyon.avif)",
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
