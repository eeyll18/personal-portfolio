import React from "react";
import './about.css';

function About() {
  return (
    <div className="about" id="about">
      <h3 className="title">Hakkımda</h3>
      <div className="info">
        <p className="paragraph">
          Line 3:8: 'ReorderIcon' is defined but never used no-unused-vars Line
          5:10: 'FontAwesomeIcon' is defined but never used no-unused-vars Line
          8:24: 'setExpandNavbar' is assigned a value but never used
          no-unused-vars src\pages\Home.js Line 2:8: 'GitHubIcon' is defined but
          never used no-unused-vars Line 3:8: 'LinkedInIcon' is defined but
          never used no-unused-vars webpack compiled with 1 warning Line 3:8:
          'ReorderIcon' is defined but never used no-unused-vars Line 5:10:
          'FontAwesomeIcon' is defined but never used no-unused-vars Line 8:24:
          'setExpandNavbar' is assigned a value but never used no-unused-vars
          
        </p>
        <p className="paragraph">
          Line 2:8: 'GitHubIcon' is defined but never used no-unused-vars Line
          3:8: 'LinkedInIcon' is defined but never used no-unused-vars webpack
          compiled with 1 warning Line 3:8: 'ReorderIcon' is defined but never
          used no-unused-vars Line 5:10: 'FontAwesomeIcon' is defined but never
          used no-unused-vars Line 8:24: 'setExpandNavbar' is assigned a value
          but never used no-unused-vars src\pages\Home.js Line 2:8: 'GitHubIcon'
          is defined but never used no-unused-vars Line 3:8: 'LinkedInIcon' is
          defined but never used no-unused-vars webpack compiled with 1 warning
        </p>
      </div>
    </div>
  );
}

export default About;
