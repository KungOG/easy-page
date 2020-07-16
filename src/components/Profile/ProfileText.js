import React from "react";
import PropTypes from "prop-types";
import StyledProfile from "./style";

const ProfileText = (props) => {
  const { name, work, text } = props;
  return (
    <StyledProfile.Text className="profile__text">
      <StyledProfile.Name className="profile__name">
        Oscar Gustafsson
      </StyledProfile.Name>
      <StyledProfile.Work className="profile__work">
        Frontend developer
      </StyledProfile.Work>
      <StyledProfile.Paragraph className="profile__paragraph">
        “If you want to take the island you need to burn the boats.” <br />
        Hernán Cortés
      </StyledProfile.Paragraph>
    </StyledProfile.Text>
  );
};

ProfileText.propTypes = {
  name: PropTypes.string,
  work: PropTypes.string,
  text: PropTypes.string,
};

export { ProfileText };
