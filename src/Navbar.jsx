import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  UilCodeBranch,
  UilFavorite,
  UilUser,
  UilWindow,
  UilFileAlt,
  UilPen,
  UilBars,
  UilTimes,
} from "@iconscout/react-unicons";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [shrink, setShrink] = useState("");
  const [fade, setFade] = useState("");

  const toggleNav = () => {
    if (navOpen === true) {
      setFade("fade");
      setShrink("shrink");
      setTimeout(() => {
        setNavOpen((prev) => !prev);
        setShrink("");
        setFade("");
      }, 250);
    } else {
      setFade("fade");
      setTimeout(() => {
        setNavOpen((prev) => !prev);
        setFade("");
      }, 250);
    }

    console.log("test");
  };

  return (
    <>
      <div className="nav-link-outer-container">
        <div className="nav-link-container">
          <NavLink to="/">TV</NavLink>

          <div className={navOpen ? `nav-links ${shrink}` : "nav-links-closed"}>
            <span className="nav-link">
              <NavLink to="/about">
                <UilUser size="20" color="white" /> About
                <div className="underline bg-1"></div>
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink>
                <UilWindow size="20" color="white" /> Projects
                <div className="underline bg-1"></div>
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink>
                <UilFileAlt size="20" color="white" /> Resume
                <div className="underline bg-1"></div>
              </NavLink>
            </span>
            <span className="nav-link">
              <NavLink>
                <UilPen size="20" color="white" /> Blogs
                <div className="underline bg-1"></div>
              </NavLink>
            </span>
            <span
              className="nav-link-git"
              style={{
                borderRadius: "5px",
                boxShadow: "0px 0px 2px orangered",
              }}
            >
              <NavLink>
                <UilCodeBranch size="20" color="white" />
                <UilFavorite size="20" color="white" />
              </NavLink>
            </span>
          </div>

          {!navOpen ? (
            <span
              className={navOpen ? "burger " + fade : "burger2 " + fade}
              onClick={fade === "" && toggleNav}
            >
              <UilBars size="30" color="orangeRed" />
            </span>
          ) : (
            <span
              className={navOpen ? "burger " + fade : "burger2 " + fade}
              onClick={fade === "" && toggleNav}
            >
              <UilTimes size="30" color="orangeRed" />
            </span>
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;
