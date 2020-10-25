import React from "react";
import StyledButton from "./style";

const Button = ({ handleClick, isActive }) => {
  return (
    <StyledButton
      active={isActive}
      className={`${isActive ? "-active" : "-inactive"}`}
      onClick={handleClick}
    >
      {!isActive ? (
        <span data-back="Show Projects" data-front="My Projects"></span>
      ) : (
        <span>Hide Projects</span>
      )}
    </StyledButton>
  );
};

export { Button };
