import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import ReorderIcon from "@mui/icons-material/Reorder";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  // const location = useLocation(); // sayfa hangi ekranda - where your website in
  // useEffect(() => {
  //   setExpandNavbar(false);
  // }, [location]); // when we click navbar on the phone, the navbar screen will close the navbar

  return (
    <nav className="navbar">
      
        <div className="logo">
          <img
            src="https://scontent.fadb1-2.fna.fbcdn.net/v/t39.30808-6/309447865_466000125567874_3267828107261951843_n.png?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=fqEZcgSF-qMAX_zQaLB&_nc_ht=scontent.fadb1-2.fna&oh=00_AfB2jND5plvkrsMc4K-IpOAT_NNZQTED_NT1aSJ01dEhdQ&oe=65D64506"
            alt="smmm"
          ></img>
          <h5>Ömer Taşkömür</h5>
        </div>
        <ul className={expandNavbar ? "navlinks-mobile":"navlinks"} onClick={()=>{
          setExpandNavbar(false)
        }}>
          <Link id="home" to="main" onClick={()=>setExpandNavbar(false)} smooth={true} duration={400}>
            <li>Anasayfa</li>
          </Link>
          <Link id="home" to="about" onClick={()=>setExpandNavbar(false)} smooth={true} duration={400}>
            <li>Hakkımızda</li>
          </Link>
          <Link id="home" to="services" onClick={()=>setExpandNavbar(false)} smooth={true} duration={400}>
            <li>Hizmetlerimiz</li>
          </Link>
          <Link id="home" to="contact" onClick={()=>setExpandNavbar(false)} smooth={true} duration={400}>
            <li>İletişim</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={()=>{
          setExpandNavbar(!expandNavbar)
        }}>
          {expandNavbar ? <ImCross /> : <FaBars />}
        </button>
     
    </nav>
  );
}

export default Navbar;
