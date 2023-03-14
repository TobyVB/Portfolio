import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Footer from "../Footer.jsx";

export default function Homepage() {
  const contentRef = useRef();
  const scrollBody = useRef();
  const buttonRef = useRef();

  const [scrollH, setScrollH] = useState();

  // cause a state change so the newly assigned contentRef
  // scroll height that is passed into the layer's style is updated
  // in the final render
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setUpdate(true);
  }, [contentRef]);

  function getScrollHeight() {
    // setScrollH(scrollBody.current.scrollTop);
    // console.log("scrollHeight" + scrollH);
    // setUpdate((prev) => !prev);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(scrollBody.current.scrollTop);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  function Introduction() {
    return (
      <div
        className="homepage-introduction"
        style={{
          textAlign: "left",
          fontSize: "1.25rem",
        }}
      >
        <p>
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
        </p>
        <p>I am fluent in classics like C++, Javascript and Python.</p>
        <p>
          My field of Interest's are building new Web Technologies and Products
          and also in areas related to Deep Learning and Natural Launguage
          Processing.
        </p>
        <p>
          Whenever possible, I also apply my passion for developing products
          with Node.js and Modern Javascript Library and Frameworks like
          React.js and Next.js
        </p>
      </div>
    );
  }
  function TypeText() {
    return (
      <h3>
        <TypeAnimation
          sequence={[
            "Developer", // Types 'One'
            1000, // Waits 1s
            "Freelancer", // Deletes 'One' and types 'Two'
            1000, // Waits 1s
            "Videogame Maker", // Types 'Three' without deleting 'Two'
            1000, // Waits 1s
            "Enthusiast", // Types 'Three' without deleting 'Two'
            1000, // Waits 1s
            "Digital Artist", // Types 'Three' without deleting 'Two'
            1000, // Waits 1s
            // () => {
            //   console.log("Done typing!"); // Place optional callbacks anywhere in the array
            // },
          ]}
          wrapper="div"
          cursor={false}
          repeat={Infinity}
          style={{ fontSize: "1.5rem", color: "orangered", fontWeight: "400" }}
          speed="10"
        />
      </h3>
    );
  }
  return (
    <div>
      <button
        className="track-btn"
        ref={buttonRef}
        onClick={() => getScrollHeight()}
        style={{ zIndex: "30", position: "fixed", left: "50%", top: "50%" }}
      >
        click
      </button>
      <div ref={scrollBody} className="parallax">
        <div
          className="parallax-layer layer2"
          style={{
            opacity: "25%",
            backgroundPosition: "center",
            backgroundImage: "url(../../public/canyon.avif)",
            height: `${
              contentRef.current !== undefined
                ? contentRef.current.scrollHeight / 1
                : 400
            }px`,
          }}
        ></div>
        <div
          ref={contentRef}
          className="parallax-layer layer1"
          style={{ padding: "0 5em" }}
        >
          <div style={{ padding: "10em 0" }}>
            <div className="section">
              <div style={{ textAlign: "left" }}>
                <h1>Hello! 👋</h1>
                <h2>
                  I'M <span className="clr-1">TOBY VANBAAST</span>
                </h2>
                <TypeText />
              </div>
              <div style={{ marginTop: "3em" }} className="homepage-pic1">
                image
              </div>
            </div>
            <h1>LET ME INTRODUCE MYSELF</h1>
            <div className="section">
              <Introduction />
              <div className="homepage-pic2">image</div>
            </div>
            <div>
              <h1>FIND ME ON</h1>
              <div>work profiles/ social media</div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
