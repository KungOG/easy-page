import React from "react";
import PropTypes from "prop-types";
import StyledProfile from "./style";

const ProfilePicture = ({ profilePicture }) => {
  return (
    <StyledProfile.Picture>
      <StyledProfile.Image image={profilePicture} />
    </StyledProfile.Picture>
  );
};

ProfilePicture.propTypes = {
  profilePicture: PropTypes.string,
};

export { ProfilePicture };
