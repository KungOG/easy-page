import React from "react";
import PropTypes from "prop-types";
import StyledProfile from "./style";
import { ProfilePicture } from "./ProfilePicture";
import { ProfileText } from "./ProfileText";
import Image from "../../assets/images/image.jpg";
import LogoType from "../../assets/images/logotype.jpg";
import { ProfileYou } from "../../assets/data/ProfileSocials";

const Profile = ({ hide }) => {
  const backgroundImage =
    Image === true ? `url('${Image}')` : `url('${LogoType}')`;

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
