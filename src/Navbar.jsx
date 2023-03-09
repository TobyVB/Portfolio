import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 4em",
          fontSize: "1.25rem",
        }}
      >
        <NavLink to="/">Logo</NavLink>
        <div className="nav-links" style={{ display: "flex", gap: "3em" }}>
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
      </div>
    </div>
  );
};
export default Navbar;
