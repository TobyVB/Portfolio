import { useEffect, useState, useRef } from "react";
import GitHubCalendar from "react-github-calendar";
import {
  UilGithub,
  UilTwitter,
  UilLinkedin,
  UilFacebook,
  UilJavaScript,
  UilReact,
  UilCodeBranch,
} from "@iconscout/react-unicons";

export default function About() {
  const scrollBody = useRef();
  const contentRef = useRef();

  //   const selectLastHalfYear = (contributions) => {
  //     const currentYear = new Date().getFullYear();
  //     const currentMonth = new Date().getMonth();
  //     const shownMonths = 6;

  //     return contributions.filter((day) => {
  //       const date = new Date(day.date);
  //       const monthOfDay = date.getMonth();

  //       return (
  //         date.getFullYear() === currentYear &&
  //         monthOfDay > currentMonth - shownMonths &&
  //         monthOfDay <= currentMonth
  //       );
  //     });
  //   };

  // skills data
  const skillData = [
    { name: "url(../../javascript.svg)", size: "50%" },
    { name: "url(../../nodejs-icon.svg)", size: "45%" },
    { name: "url(../../react.svg)", size: "50%" },
    { name: "url(../../mongodb-icon.svg)", size: "25%" },
    { name: "url(../../nextjs-icon.svg)", size: "50%" },
    { name: "url(../../git-icon.svg)", size: "50%" },
    { name: "url(../../firebase.svg)", size: "30%" },
    { name: "url(../../jquery.svg)", size: "60%" },
  ];

  const toolData = [
    {
      name: "url(../../visual-studio-code.svg)",
      size: "50%",
    },
    {
      name: "url(../../postman-icon.svg)",
      size: "50%",
    },
    {
      name: "url(../../heroku-icon.svg)",
      size: "50%",
    },
    {
      name: "url(../../vercel.svg)",
      size: "65%",
    },
  ];

  function Skills() {
    return skillData.map((skill) => {
      return (
        <div className="about-item-container">
          <div
            className="about-item"
            style={{
              borderRadius: "5px",
              backgroundImage: `${skill.name}`,
              backgroundPosition: "center",
              backgroundSize: `${skill.size}`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      );
    });
  }

  function Tools() {
    return toolData.map((tool) => {
      return (
        <div className="about-item-container">
          <div
            className="about-item"
            style={{
              borderRadius: "5px",

              backgroundImage: `${tool.name}`,
              backgroundPosition: "center",
              backgroundSize: `${tool.size}`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
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
                width: "90%",
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
                height: "400px",
                width: "400px",
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
          <div style={{ width: "80%", margin: "0 auto", overflow: "scroll" }}>
            <h2>Git Activity</h2>
            <GitHubCalendar
              username="TobyVB"
              color="orangered"
              style={{ margin: "0 auto" }}
              //   transformData={selectLastHalfYear}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
