import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <h3>Serbest Muhasebeci Mali Müşavir</h3>
          <h4>Ömer Taşkömür</h4>
          <h4>Adres Alani - Gaziantep</h4>
        </div>

        <div className="footer-links">
          <ul>
            <li>
              <Link to="main">Anasayfa</Link>
            </li>
            <li>
              <Link to="about">Hakkımızda</Link>
            </li>
            <li>
              <Link to="services">Hizmetlerimiz</Link>
            </li>
            <li>
              <Link to="contact">İletişim</Link>
            </li>
            {/* <Link id="home" to="main">
              <li>Anasayfa</li>
            </Link>
            <Link id="home" to="about">
              <li>Hakkımızda</li>
            </Link>
            <Link id="home" to="services">
              <li>Hizmetlerimiz</li>
            </Link>
            <Link id="home" to="contact">
              <li>İletişim</li>
            </Link> */}
          </ul>
        </div>

        <div className="footer-social">
          <h3>İletişim Bilgileri</h3>
          <p>
            <i className="fa-solid fa-phone-volume"></i> 0546 903 2109
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> eda@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-paper-plane"></i> Gaziantep, Türkiye
          </p>
          {/* <a href="https://www.instagram.com">
            <InstagramIcon />
          </a>
          <a href="https://www.github.com">
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com">
            <LinkedInIcon />
          </a> */}
        </div>
      </div>
      {/* <p>&copy; 2024 Eylul</p> */}
    </footer>
  );
}

export default Footer;
