import React from "react";

function AboutMe() {
  return (
    <div>
      <div className="aboutMe">
        <h2 className="title">About Me</h2>
        <div className="paragraph">
          <p className="paragraghText">
            I am a junior data scientist stepping into the world of data
            science. During my university education, I developed fundamental
            data science skills, enhancing my abilities to understand, analyze,
            and interpret datasets. Actively working with the Python programming
            language, machine learning algorithms, and statistical analysis
            methods, I have a keen willingness to learn and explore. My goal is
            to enhance my current practical knowledge and contribute valuable
            insights to the business world. I am eager to work collaboratively,
            understand the complexity of data science, and advance my skills to
            make valuable contributions to the business. Working with you, I
            look forward to taking my abilities in data science to the next
            level.
          </p>
        </div>
      </div>

      <div className="certificate">
        <h2 className="title2">Certificates</h2>

        <div className="certificateCard">
          <h3>Tensorflow for Python and Data Scientists </h3>
          <a
            href="https://www.btkakademi.gov.t
r/portal/certificate/validate?
certificateId=6mqFNEWGxo
"
            className="certificateLink"
          >
            Click For Certificate
          </a>
        </div>
        <div className="certificateCard">
          <h3>Deep Learning A-Z : Neural Networks and AI</h3>
          <a
            href="https://www.udemy.com/certif
icate/UC-f1006ee2-eec3-4273-
b622-3013d1c752f8/
"
            className="certificateLink"
          >
            Click For Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
