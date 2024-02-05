import React, { useEffect, useState } from "react";
import { Link,useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation()    // sayfa hangi ekranda - where your website in
  useEffect(()=>{
    setExpandNavbar(false)
  },[location])         // when we click navbar on the phone, the navbar screen will close the navbar

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>

      <div className="links">
        <Link className="link" to="/">Home</Link>
        <Link className="link link2" to="/about" >About Me</Link>
        <Link className="link" to="/experience">Experience</Link>
        

      </div>
    </div>
  );
}

export default Navbar;
