import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Halil!</h2>
        <div className="prompt">
          <p>
            A junior data scientist stepping into the world of data science.
          </p>
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Python</h2>
            {/* <span>NumPy, Pandas, Scikit-Learn, TensorFlow,Keras</span> */}
          </li>
          <li className="item">
            <h2>Create ML and DL models and improve</h2>
            {/* <span>JavaScript, TypeScript</span> */}
          </li>
          <li className="item">
            <h2>Data Processing and Analytic</h2>
            {/* <span>JavaScript, TypeScript</span> */}
          </li>
          <li className="item">
            <h2>Data Visualization</h2>
            {/* <span>JavaScript, TypeScript</span> */}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
