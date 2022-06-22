import React from "react";

import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Wave from "../../img/wave2.png";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span style={{ marginBottom: "-3%" }}>ayseelgoren@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://github.com/ayseelgoren"
            target="_blank"
            rel="noreferrer"
          >
            <Github color="white" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/ay%C5%9Fe-elg%C3%B6ren/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
