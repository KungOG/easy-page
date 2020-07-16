import React from "react";
import PropTypes from "prop-types";
import StyledProfile from "./style";
import { Button } from "../Button";

const ProfileSocials = ({ href, icon }) => {
  return (
    <StyledProfile.Links className="profile__links">
      <StyledProfile.Link
        className="profile__links--type"
        href="https://www.facebook.com/KungOG"
        rel="noopener noreferrer external"
        target="_blank"
      >
        <i className="fa fa-facebook"></i>
      </StyledProfile.Link>
      <StyledProfile.Link
        className="profile__links--type"
        href="https://twitter.com/OG91an"
        rel="noopener noreferrer external"
        target="_blank"
      >
        <i className="fa fa-twitter"></i>
      </StyledProfile.Link>
      <StyledProfile.Link
        className="profile__links--type"
        href="https://github.com/KungOG"
        rel="noopener noreferrer external"
        target="_blank"
      >
        <i className="fa fa-github"></i>
      </StyledProfile.Link>
      <StyledProfile.Link
        className="profile__links--type"
        href="https://www.linkedin.com/in/kungog"
        rel="noopener noreferrer external"
        target="_blank"
      >
        <i className="fa fa-linkedin"></i>
      </StyledProfile.Link>
    </StyledProfile.Links>
  );
};

ProfileSocials.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
};

export { ProfileSocials };
