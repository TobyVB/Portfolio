import React from "react";
const Footer = () => {
  return (
    <div
      style={{
        // position: "relative",
        // bottom: "0",
        // left: "0",
        width: "100%",
        zIndex: "1",
      }}
    >
      <div
        style={{
          padding: "0 5em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>Designed and Developed by Toby Van Baast</p>
        <p>Copyright &copy;2023 TobyVB</p>
        <p>social media icons</p>
      </div>
    </div>
  );
};
export default Footer;
