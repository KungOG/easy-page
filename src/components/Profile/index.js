import React from "react";
import PropTypes from "prop-types";
import StyledProfile from "./style";
import { ProfilePicture } from "./ProfilePicture";
import { ProfileText } from "./ProfileText";
import Image from "../../assets/images/image.jpg";
import LogoType from "../../assets/images/logotype.jpg";

const Profile = ({ hide }) => {
  const backgroundImage =
    Image === true ? `url('${Image}')` : `url('${LogoType}')`;

  return (
    <StyledProfile hide={hide}>
      <ProfilePicture profilePicture={backgroundImage} />
      <ProfileText />
    </StyledProfile>
  );
};

Profile.propTypes = {
  hide: PropTypes.bool,
};

export { Profile };
