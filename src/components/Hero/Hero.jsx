import React from "react";
import "./Hero.css";
import coding_ninjas from "../../assets/coding_ninjas.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiDownload } from "react-icons/fi";
import resumeFile from "../../assets/dashrath_shinde-frontend.pdf";

const Hero = () => {
  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Dashrath_Shinde_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id="home" className="hero">
      <img src={coding_ninjas} alt="profileImage" />
      <h1>
        <span>I'm Dashrath Shinde,</span> Web developer based in India.
      </h1>
      <p>
        "I’m a web developer with a year of hands-on experience, eager to craft
        digital solutions and bring innovative ideas to life."
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div onClick={handleResumeDownload} className="hero-resume">
          My resume
          <FiDownload className="download-resume" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
