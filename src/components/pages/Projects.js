import React from "react";

import Hero from "../utils/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";

const Projects = (props) => {
  return (
    <div>
      <Hero title={props.title} />
      <div className="project-icon">
        <FontAwesomeIcon icon={faTools} />
      </div>
      <div className="unavailable">
        <h1>Sorry! This page is unavailable for now.</h1>
      </div>
    </div>
  );
};

export default Projects;
