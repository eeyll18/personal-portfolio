import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://www.github.com">
          <GitHubIcon />
        </a>
        <a href="https://linkedin.com">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2024 Eylul</p>
    </div>
  );
}

export default Footer;
