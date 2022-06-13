import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Works.css";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Works">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Programming</span>
        <span> Languages & Tools</span>
        <span>
          <p align="left" className="tools">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg"
              alt="angularjs"
              style={{ width: "40px", height: "40px" }}
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
              alt="vuejs"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
              alt="csharp"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
              alt="dotnet"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="java"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://w7.pngwing.com/pngs/244/430/png-transparent-microsoft-sql-server-sql-server-management-studio-database-server-microsoft-angle-text-triangle-thumbnail.png"
              alt="mssql"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
              alt="mysql"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              style={{ width: "40px", height: "40px" }}
            />

            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg"
              alt="swift"
              style={{ width: "40px", height: "40px" }}
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
              alt="c"
              style={{ width: "40px", height: "40px" }}
            />
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
              alt="bootstrap"
              style={{ width: "40px", height: "40px" }}
            />
          </p>
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
};

export default Works;
