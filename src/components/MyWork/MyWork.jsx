import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <a
            className={`project-link ${
              work.status === "development" ? "disabled-link" : ""
            }`}
            href={work.status === "completed" ? work.w_link : "#"}
            key={index}
            target={work.status === "completed" ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            <div
              className={`project-card ${
                work.status === "development" ? "project-development" : ""
              }`}
            >
              <img src={work.w_img} alt={work.w_name} />
              {work.status === "development" && (
                <span className="project-badge">In Development</span>
              )}
            </div>
          </a>
        ))}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
