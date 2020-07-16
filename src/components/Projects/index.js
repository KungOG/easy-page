import React from "react";
import PropTypes from "prop-types";
import StyledProjects from "./style";
import { Slider } from "../Slider";
import ProfileProjects from "../../assets/data/ProfileProjects";

const Projects = ({ isActive }) => {
  return (
    <StyledProjects hide={isActive}>
      <Slider bullets children={ProfileProjects} />
    </StyledProjects>
  );
};

Projects.propTypes = {
  hide: PropTypes.bool,
};

export { Projects };
