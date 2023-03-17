import { useEffect, useState, useRef } from "react";

export default function About() {
  const scrollBody = useRef();
  const contentRef = useRef();

  // skills data
  const skillData = [
    { name: "JS" },
    { name: "Node" },
    { name: "React" },
    { name: "MongoDB" },
    { name: "Next" },
    { name: "Git" },
    { name: "Firebase" },
    { name: "Python" },
    { name: "jQuery" },
  ];

  const toolData = [
    { name: "vscode" },
    { name: "postman" },
    { name: "heroku" },
    { name: "vercel" },
  ];

  function Skills() {
    return skillData.map((skill) => {
      return (
        <div
          className="about-item"
          style={{
            border: "1px solid orangeRed",
            borderRadius: "5px",
            margin: "0 auto",
          }}
        >
          <p>{skill.name}</p>
        </div>
      );
    });
  }

  function Tools() {
    return toolData.map((tool) => {
      return (
        <div
          className="about-item"
          style={{
            border: "1px solid orangeRed",
            borderRadius: "5px",
          }}
        >
          <p>{tool.name}</p>
        </div>
      );
    });
  }

  return (
    <div ref={scrollBody}>
      <div
        style={{
          opacity: "15%",
          backgroundPosition: "center",
          backgroundImage: "url(../../canyon1.avif)",
          display: "block",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          zIndex: "-1",
        }}
      ></div>
      <div ref={contentRef}>
        <div style={{ padding: "10em 0 5em 0" }}>
          <div className="section">
            <div
              style={{
                maxWidth: "500px",
                fontSize: "1.25rem",
                textAlign: "left",
                margin: "0 auto",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Who am I?</h2>
              <p>
                Hi Everyone, I am <span className="clr-1">Toby Van Baast</span>{" "}
                from <span className="clr-1">Austin, Texas</span>.
              </p>
              <p>
                I am a junior pursuing IMSC in Maths and Computing in BIT Mesra.
              </p>
              <p style={{ paddingTop: "1em" }}>
                Apart from coding, some other activities that I love to do!
              </p>
              <ul>
                <li>Playing Games</li>
                <li>Writing Tech Blogs</li>
                <li>Travelling</li>
              </ul>
            </div>
            <div
              style={{
                backgroundImage: "url(../../Innovation-rafiki.png)",
                height: "450px",
                width: "450px",
                backgroundSize: "100%",
                margin: "0 auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div style={{ margin: "0 auto" }}>
            <h2>
              Professional <span className="clr-1">Skillset</span>
            </h2>
            <div className="about-items-container">
              <Skills />
            </div>
          </div>
          <div>
            <h2>
              <span className="clr-1">Tools</span> I use
            </h2>
            <div className="about-items-container">
              <Tools />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
