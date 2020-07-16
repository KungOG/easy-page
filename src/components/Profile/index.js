import React from "react";
import PropTypes from "prop-types";
import StyledProfile from "./style";
import { ProfilePicture } from "./ProfilePicture";
import { ProfileText } from "./ProfileText";
import { ProfileYou } from "../../assets/data/ProfileSocials";
import LogoType from "../../assets/images/logotype.jpg";

const Profile = ({ hide }) => {
  const backgroundImage = ProfileYou.image ? ProfileYou.image : LogoType;

  return (
    <StyledProfile hide={hide}>
      <ProfilePicture profilePicture={backgroundImage} />
      <ProfileText
        name={ProfileYou.name}
        work={ProfileYou.work}
        text={ProfileYou.text}
      />
    </StyledProfile>
  );
};

Profile.propTypes = {
  hide: PropTypes.bool,
};

export { Profile };
