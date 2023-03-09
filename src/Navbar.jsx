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
        <div style={{ display: "flex", gap: "3em" }}>
          <NavLink>About</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Resume</NavLink>
          <NavLink>Blogs</NavLink>
          <NavLink>Github</NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
