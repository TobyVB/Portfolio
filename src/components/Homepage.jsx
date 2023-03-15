import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Footer from "../Footer.jsx";

export default function Homepage() {
  const contentRef = useRef();
  const scrollBody = useRef();

  // cause a state change so the newly assigned contentRef
  // scroll height that is passed into the layer's style is updated
  // in the final render
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setUpdate(true);
  }, [contentRef]);

  const [dist1, setDist1] = useState(100);
  const [added, setAdded] = useState(false);
  const [textClass, setTextClass] = useState("textLeave");
  useEffect(() => {
    const interval = setInterval(() => {
      const texts = document.querySelector(".homepage-introduction");
      const textsLoc = texts.getBoundingClientRect().top;
      const scrollLoc = scrollBody.current.scrollTop - 150;
      console.log("scroll " + scrollLoc + " text: " + textsLoc);
      if (textsLoc > scrollLoc) {
        if (!added) {
          setTextClass("textLeave");
          setAdded(true);
        }
      } else if (textsLoc < scrollLoc && scrollLoc - textsLoc < 1000) {
        if (!added) {
          setTextClass("textEnter");
          setAdded(false);
        }
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  // when parent div is below target location
  // use a function to create a sequenced chain reaction
  // of adding animations

  // when pare div is above target location
  //  use a function to create a sequenced chain reaction
  // for removing animations in reverse

  function Introduction() {
    return (
      <div style={{ overflow: "hidden" }}>
        <div
          className={`homepage-introduction ${textClass}`}
          style={{
            textAlign: "left",
            fontSize: "1.25rem",
            // marginLeft: `-${dist1}%`,
            width: "100%",
          }}
        >
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
    <div ref={scrollBody} className="parallax">
      <div
        className="parallax-layer layer2"
        style={{
          opacity: "25%",
          backgroundPosition: "center",
          backgroundImage: "url(../../public/canyon.avif)",
          height: `${
            contentRef.current !== undefined
              ? contentRef.current.scrollHeight / 1.7
              : 400
          }px`,
        }}
      ></div>
      <div ref={contentRef} className="parallax-layer layer1">
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
  );
}
