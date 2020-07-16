import React from "react";
import PropTypes from "prop-types";
import StyledProjectCard from "./style";
//import Image from "../../assets/images/image.jpg";
import LogoType from "../../assets/images/logotype.jpg";

const ProjectCard = (props) => {
  const {
    projectName,
    projectContent,
    projectLink,
    projectTag,
    active,
  } = props;

  const backgroundImage =
    { Image } === true ? `url('${Image}')` : `url('${LogoType}')`;

  return (
    <StyledProjectCard
      show={active}
      style={{ backgroundImage: `${backgroundImage}` }}
    >
      <StyledProjectCard.Wrapper>
        <StyledProjectCard.Name>{projectName}</StyledProjectCard.Name>
        <StyledProjectCard.Content>{projectContent}</StyledProjectCard.Content>
        <StyledProjectCard.Link
          href={projectLink}
          rel="noopener noreferrer external"
          target="_blank"
        >
          {projectTag}
        </StyledProjectCard.Link>
      </StyledProjectCard.Wrapper>
      <StyledProjectCard.Gradient />
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  projectName: PropTypes.string,
  projectContent: PropTypes.string,
  projectLink: PropTypes.string,
  projectTag: PropTypes.string,
  active: PropTypes.bool,
};

export { ProjectCard };
