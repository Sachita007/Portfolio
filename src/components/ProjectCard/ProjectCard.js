import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import "./../../assests/images/SCART.png"

export default function ProjectCard({ repo: project, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    // cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  const buttonStyle = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={project.name}
          // onClick={() => openRepoinNewTab(project.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <img alt="project" height={"200px"} className="rapo-name-img" width={"90%"} src={require(`./../../assests/images/${project.image}`)} ></img>
            <p className="repo-name" style={{ color: theme.text }}>
              {project.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {project.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={project.languages} />
          </div>
          <div className="repo-links">
            <div {...buttonStyle} onClick={() => openRepoinNewTab(project.github)} className="repo-Link">GitHub</div>
            <div {...buttonStyle} onClick={() => openRepoinNewTab(project.link)} className="repo-Link">Live</div>
          </div>
        </div>
      </Fade >
    </div >
  );
}
