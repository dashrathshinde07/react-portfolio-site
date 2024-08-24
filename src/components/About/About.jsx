import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

import ds_about from "../../assets/ds_about.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="themeImage" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={ds_about} alt="profileImg" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a web developer specializing in the MERN stack with a year of
              hands-on experience. I’ve had the chance to work on various
              projects, refining my skills and delivering impactful solutions.
            </p>
            <p>
              My enthusiasm for web development shines through in every project,
              where I focus on creating innovative and user-centric digital
              experiences using MongoDB, Express, React, and Node.js.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Tailwind CSS</p> <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p> <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p> MongoDB</p> <hr style={{ width: "52%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1.5+</h1>
          <p>YEAR OF IMMERSIVE EXPERIENCEE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>40+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>ENDORSEMENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
