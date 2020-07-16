import React from "react";
import PropTypes from "prop-types";
import StyledProjectCard from "./style";
import LogoType from "../../assets/images/logotype.jpg";

const ProjectCard = (props) => {
  const {
    projectImage,
    projectName,
    projectContent,
    projectLink,
    projectTag,
    active,
  } = props;

  const Image = projectImage ? projectImage : LogoType;

  return (
    <StyledProjectCard show={active} image={Image}>
      <StyledProjectCard.Wrapper>
        <StyledProjectCard.Name>{projectName}</StyledProjectCard.Name>
        <StyledProjectCard.Content
          dangerouslySetInnerHTML={{ __html: projectContent }}
        />
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
