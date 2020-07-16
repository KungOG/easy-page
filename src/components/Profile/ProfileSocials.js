import React from "react";
import PropTypes from "prop-types";
import StyledProfile from "./style";
import { Button } from "../Button";
import { ProfileContact } from "../../assets/data/ProfileSocials";

const ProfileSocials = ({ href, icon }) => {
  return (
    <StyledProfile.Links>
      {ProfileContact.map((link, key) => {
        return (
          <StyledProfile.Link
            key={link.id ? link.id : key}
            href={link.href}
            rel="noopener noreferrer external"
            target="_blank"
          >
            <i className={`fa fa-${link.siteIcon}`}></i>
          </StyledProfile.Link>
        );
      })}
    </StyledProfile.Links>
  );
};

ProfileSocials.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
};

export { ProfileSocials };
