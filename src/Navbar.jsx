import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen((prev) => !prev);
    console.log("test");
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        borderBottom: "1px solid white",
        width: "100%",
        padding: "1em 0",
        zIndex: "1",
        background: "rgba(0,0,0,.5)",
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
        <NavLink to="/">Logo</NavLink>
        {/* <div className="nav-links" style={{ display: "flex", gap: "3em" }}> */}
        {navOpen && (
          <div className="nav-links">
            <span>
              <NavLink>About</NavLink>
            </span>
            <span>
              <NavLink>Projects</NavLink>
            </span>
            <span>
              <NavLink>Resume</NavLink>
            </span>
            <span>
              <NavLink>Blogs</NavLink>
            </span>
            <span>
              <NavLink>Github</NavLink>
            </span>
          </div>
        )}
        {/* </div> */}
        <span className="burger" onClick={toggleNav}>
          🍔
        </span>
      </div>
    </div>
  );
};
export default Navbar;
