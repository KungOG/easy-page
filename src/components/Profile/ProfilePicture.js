import React from "react";
import PropTypes from "prop-types";
import StyledProfile from "./style";

const ProfilePicture = ({ profilePicture }) => {
  return (
    <StyledProfile.Picture className="profile__picture">
      <StyledProfile.Image
        className="profile__image"
        style={{ backgroundImage: `${profilePicture}` }}
      />
    </StyledProfile.Picture>
  );
};

ProfilePicture.propTypes = {
  profilePicture: PropTypes.string,
};

export { ProfilePicture };
