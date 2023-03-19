export default function Projects() {
  const projectData = [
    {
      path: "https://user-images.githubusercontent.com/98196156/221370173-e6f67b4e-ae06-41b4-8b98-82f5f365e61e.png",
      size: "100%",
      title: "The TalkSpace",
      info: "This is an ongoing project I am working on. It is a social media site inspired by Reddit, Facebook, Myspace, Quora and Github",
      github: "https://github.com/TobyVB/Talkspace",
      demo: "https://fir-practice-cace4.web.app/",
    },
    // { path: "", size: "200%", title: "", info: "", github: "", demo: "" },
    // { path: "", size: "200%", title: "", info: "", github: "", demo: "" },
    // { path: "", size: "200%", title: "", info: "", github: "", demo: "" },
    // { path: "", size: "200%", title: "", info: "", github: "", demo: "" },
  ];

  function ProjectsArray() {
    return projectData.map((project) => {
      return (
        <div className={`about-item-container2`}>
          <div
            className={`about-item2`}
            style={{
              borderRadius: "5px",
              backgroundSize: `${project.size}`,
              backgroundImage: `url(${project.path})`,
              width: "560px",
              height: "360px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              margin: "auto",
            }}
          ></div>
        </div>
      );
    });
  }

  return (
    <div>
      <div
        style={{
          opacity: "15%",
          backgroundPosition: "center",
          backgroundImage: "url(../../background/canyon1.avif)",
          display: "block",
          position: "fixed",
          height: "100vh",
          width: "100vw",
          zIndex: "-1",
        }}
      ></div>
      <div style={{ padding: "10em 0 5em 0" }}>
        <h2>My Projects</h2>
        <p>Some projects I made</p>
      </div>
      <div className="about-items-container2">
        <ProjectsArray />
      </div>
    </div>
  );
}
