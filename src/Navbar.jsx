import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  UilCodeBranch,
  UilFavorite,
  UilUser,
  UilWindow,
  UilFileAlt,
  UilPen,
} from "@iconscout/react-unicons";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [shrink, setShrink] = useState("");
  const toggleNav = () => {
    if (navOpen === true) {
      setShrink("shrink");
      setTimeout(() => {
        setNavOpen((prev) => !prev);
        setShrink("");
      }, 400);
    } else {
      setNavOpen((prev) => !prev);
    }

    console.log("test");
  };

  return (
    <>
      <div
        className="nav-blocker"
        style={{
          background: "black",
          padding: "1.2em 0",
          position: "absolute",
          zIndex: "2",
          width: "60vw",
          left: "20vw",
          fontSize: "1rem",
          color: "rgba(0,0,0,0)",
        }}
      >
        <span>filler</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          // borderBottom: "1px solid white",
          width: "100%",
          padding: "1em 0",
          zIndex: "1",
          background: "rgba(0,0,0,1)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div
          className="nav-link-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.25rem",
          }}
        >
          <NavLink to="/">TV</NavLink>
          {/* <div className="nav-links" style={{ display: "flex", gap: "3em" }}> */}

          <div className={navOpen ? `nav-links ${shrink}` : "nav-links-closed"}>
            <span>
              <NavLink>
                <UilUser size="20" color="white" /> About
              </NavLink>
            </span>
            <span>
              <NavLink>
                <UilWindow size="20" color="white" /> Projects
              </NavLink>
            </span>
            <span>
              <NavLink>
                <UilFileAlt size="20" color="white" /> Resume
              </NavLink>
            </span>
            <span>
              <NavLink>
                <UilPen size="20" color="white" /> Blogs
              </NavLink>
            </span>
            <span
              style={{
                // border: "2px solid white",
                padding: ".25em 1em .2em 1em",
                background: "rgb(80,42,95)",
                borderRadius: "5px",
              }}
            >
              <NavLink>
                <UilCodeBranch size="20" color="white" />
                <UilFavorite size="20" color="white" />
              </NavLink>
            </span>
          </div>

          {/* </div> */}
          <span className="burger" onClick={toggleNav}>
            {/* 🍔 */}
            <div className={!navOpen ? `hb1o` : `hb1c`}></div>
            <div className={!navOpen ? `hb2o` : `hb2c`}></div>
            <div className={!navOpen ? `hb3o` : `hb3c`}></div>
          </span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
