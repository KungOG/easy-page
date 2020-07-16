import React from "react";
import PropTypes from "prop-types";
import StyledProfile from "./style";

const ProfileText = (props) => {
  const { name, work, text } = props;
  return (
    <StyledProfile.Text>
      <StyledProfile.Name>{name}</StyledProfile.Name>
      <StyledProfile.Work>{work}</StyledProfile.Work>
      <StyledProfile.Paragraph dangerouslySetInnerHTML={{ __html: text }} />
    </StyledProfile.Text>
  );
};

ProfileText.propTypes = {
  name: PropTypes.string,
  work: PropTypes.string,
  text: PropTypes.string,
};

export { ProfileText };
