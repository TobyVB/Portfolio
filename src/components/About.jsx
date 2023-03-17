import { useEffect, useState, useRef } from "react";

export default function About() {
  const scrollBody = useRef();
  const contentRef = useRef();

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
          backgroundPosition: "center",
        }}
      ></div>
      <div ref={contentRef}>
        <div style={{ padding: "10em 0 5em 0" }}>
          <div>
            <div
              style={{
                maxWidth: "500px",
                fontSize: "1.25rem",
                textAlign: "left",
                margin: "0 auto",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Who am I?</h2>
              <p>Hi Everyone, I am Soumyajit Behera from Bhubaneswar, India.</p>
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
                backgroundImage: "url(../../public/Innovation-rafiki.png)",
                height: "450px",
                width: "450px",
                backgroundSize: "100%",
                margin: "0 auto",
              }}
            ></div>
          </div>
          <div style={{ margin: "0 auto" }}>
            <h2>Professional Skillset</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
