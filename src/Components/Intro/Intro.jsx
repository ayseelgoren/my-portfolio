import React, { useContext } from "react";
import "./Intro.css";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import girl from "../../img/women-web-developer-with-laptop.png";
import glassesimoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Ayşe Elgören</span>
          <div class="typewriter">
            <h1>Software Enginnering</h1>
          </div>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/ayseelgoren"
            target="_blank"
            rel="noreferrer"
          >
            <Github color="#92B4EC" size="7rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/ay%C5%9Fe-elg%C3%B6ren/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn color="#92B4EC" size="7rem" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img
          src={girl}
          alt=""
          style={{
            width: "-webkit-fill-available",
            height: "-webkit-fill-available",
          }}
        />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <div className="blur" style={{ backgroud: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            backgroud: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
