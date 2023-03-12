import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  return (
    <div style={{ padding: "10em 0" }}>
      <div
        className="section1"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20em",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h1>Hello! 👋</h1>
          <h1>I'M TOBY VAN BAAST</h1>
          <h2>
            {" "}
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                1000, // Waits 1s
                "Assassin", // Deletes 'One' and types 'Two'
                1000, // Waits 1s
                "Spiritual Conquistador", // Types 'Three' without deleting 'Two'
                1000, // Waits 1s
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={false}
              repeat={Infinity}
              style={{ fontSize: "1em" }}
              speed="10"
            />{" "}
          </h2>
        </div>
        <div
          style={{ border: "3px dashed red", height: "400px", width: "400px" }}
        >
          image
        </div>
      </div>
      <div className="section2" style={{ paddingBottom: "10em" }}>
        <h1>LET ME INTRODUCE MYSELF</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ textAlign: "left" }}>
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>
            <p>I am fluent in classics like C++, Javascript and Python.</p>
            <p>
              My field of Interest's are building new Web Technologies and
              Products and also in areas related to Deep Learning and Natural
              Launguage Processing.
            </p>
            <p>
              Whenever possible, I also apply my passion for developing products
              with Node.js and Modern Javascript Library and Frameworks like
              React.js and Next.js
            </p>
          </div>
        </div>
        <div
          style={{
            border: "3px dashed red",
            width: "400px",
            height: "400px",
          }}
        >
          image
        </div>
      </div>
      <div>
        <h1>FIND ME ON</h1>
        <div>work profiles/ social media</div>
      </div>
    </div>
  );
};
export default Homepage;
