import React from "react";
import "./Hero.css";
import profiel_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiDownload } from "react-icons/fi";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profiel_img} alt="profileImage" />
      <h1>
        <span>I'm Alex Bennett,</span> frontend developer based in USA.
      </h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          My resume
          <FiDownload className="download-resume" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
