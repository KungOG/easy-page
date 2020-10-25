import React, { useState } from "react";
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
    handleFunction
  } = props;
  const Image = projectImage ? projectImage : LogoType;
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // do your stuff here for left swipe
      handleFunction(true)
      console.log('do your stuff here for left swipe')
    }

    if (touchStart - touchEnd < -75) {
      // do your stuff here for right swipe
      handleFunction(false)
      console.log('do your stuff here for right swipe')
    }
  }

  return (
    <StyledProjectCard show={active} image={Image}>
      <StyledProjectCard.Wrapper
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
