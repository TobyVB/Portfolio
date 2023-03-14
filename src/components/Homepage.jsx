import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Footer from "../Footer.jsx";

export default function Homepage() {
  const contentRef = useRef();
  const scrollBody = useRef();
  const text1ref = useRef();

  // cause a state change so the newly assigned contentRef
  // scroll height that is passed into the layer's style is updated
  // in the final render
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    setUpdate(true);
  }, [contentRef]);

  const [textss, setTextss] = useState("textLeave");
  const [text1, setText1] = useState("textLeave");
  const [text2, setText2] = useState("textLeave");
  const [text3, setText3] = useState("textLeave");
  const [text4, setText4] = useState("textLeave");
  // const [textAdded, setTextAdded] = useState(false);

  const [dist1, setDist1] = useState(100);
  useEffect(() => {
    let textAdded = false;
    const interval = setInterval(() => {
      const texts = document.querySelector(".homepage-introduction");
      const textsLoc = texts.getBoundingClientRect().top;
      const scrollLoc = scrollBody.current.scrollTop - 150;
      console.log("scroll " + scrollLoc + " text: " + textsLoc);
      if (textsLoc > scrollLoc) {
        if (textAdded === true) {
          moveOutText();
          // setTextAdded(false);
          textAdded = false;
        }
      } else if (textsLoc < scrollLoc) {
        if (textAdded === false) {
          moveInText();
          // setTextAdded(true);
          textAdded = true;
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
  // for removing animations in reverse order

  function moveInText() {
    setTextss("textEnter");
    // addClass
    // setTimeout(() => {
    //   setText1("textEnter");
    // }, 250);
    // setTimeout(() => {
    //   setText2("textEnter");
    // }, 500);
    // setTimeout(() => {
    //   setText3("textEnter");
    // }, 750);
    // setTimeout(() => {
    //   setText4("textEnter");
    // }, 1000);
  }
  function moveOutText() {
    setTextss("textLeave");
    // setTimeout(() => {
    //   setText1("textLeave");
    // }, 250);
    // setTimeout(() => {
    //   setText2("textLeave");
    // }, 500);
    // setTimeout(() => {
    //   setText3("textLeave");
    // }, 750);
    // setTimeout(() => {
    //   setText4("textLeave");
    // }, 1000);
  }

  function Introduction() {
    return (
      <div style={{ overflow: "hidden" }}>
        <div
          className={`homepage-introduction`}
          style={{
            textAlign: "left",
            fontSize: "1.25rem",
            // width: "100%",
          }}
        >
          <div className={`${textss}`}>
            <div className={`${text1}`}>
              <p>
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
              </p>
            </div>
            <div className={`${text2}`}>
              <p>I am fluent in classics like C++, Javascript and Python.</p>
            </div>
            <div className={`${text3}`}>
              <p>
                My field of Interest's are building new Web Technologies and
                Products and also in areas related to Deep Learning and Natural
                Launguage Processing.
              </p>
            </div>
            <div className={`${text4}`}>
              <p>
                Whenever possible, I also apply my passion for developing
                products with Node.js and Modern Javascript Library and
                Frameworks like React.js and Next.js
              </p>
            </div>
          </div>
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
          // repeat={Infinity}
          style={{ fontSize: "1.5rem", color: "orangered", fontWeight: "400" }}
          speed="10"
        />
      </h3>
    );
  }
  return (
    <div>
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
