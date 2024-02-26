import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./home.css";
import image from '../images/indir2.jpeg'

function Home() {
  return (
    <div className="home" id="main">
      <div className="infos">
        <h2>Ömer Taşkömür</h2>
        <p>Serbes Muhasebeci Mali Müşavir</p>
        <p>Gaziantep</p>
      </div>

      <div className="logo">
        <img
          src={image}
          alt="smmm"
        ></img>
      </div>

    </div>
  );
}

export default Home;
