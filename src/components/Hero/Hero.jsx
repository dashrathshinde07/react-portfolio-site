import React from "react";
import "./Hero.css";
import coding_ninjas from "../../assets/coding_ninjas.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={coding_ninjas} alt="profileImage" />

      <h1>
        <span>I'm Dashrath Shinde,</span> Web Developer based in India.
      </h1>

      {/* New value proposition */}
      <p className="hero-subtext">
        Helping startups & businesses build <strong>fast</strong>,{" "}
        <strong>scalable</strong>, and <strong>stunning</strong> web
        applications that drive real results.
      </p>

      <p>
        I specialize in crafting digital solutions using the MERN stack,
        focusing on speed, functionality, and user experience to help your
        business grow.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Hire Me
          </AnchorLink>
        </div>

        {/* Replaced Resume with Portfolio Button */}
        <div className="hero-portfolio">
          <AnchorLink className="anchor-link" offset={50} href="#work">
            View Portfolio
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
