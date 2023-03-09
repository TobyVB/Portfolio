const Homepage = () => {
  return (
    <div style={{ padding: "10em 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20em",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h1>Hello! 👋</h1>
          <h1>I'M TOBY VAN BAAST</h1>
          <h2> Developer </h2>
        </div>
        <div
          style={{ border: "3px dashed red", height: "400px", width: "400px" }}
        >
          image
        </div>
      </div>
      <div style={{ paddingBottom: "10em" }}>
        <h1>LET ME INTRODUCE MYSELF</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ textAlign: "left", width: "50%" }}>
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
      </div>
      <div>
        <h1>FIND ME ON</h1>
        <div>work profiles/ social media</div>
      </div>
    </div>
  );
};
export default Homepage;
