import React, { useState, useEffect } from "react";
import StyledModal from "./style";
import { Projects } from "../Projects";
import { ProfileSocials } from "../Profile/ProfileSocials";
import { Button } from "../Button";
import { Profile } from "../Profile";

const Modal = () => {
  const [active, setActive] = useState(false);
  const [flipCard, setFlipCard] = useState(false);

  const showProjects = () => {
    setActive(!active);
    setFlipCard(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipCard(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [flipCard]);

  return (
    <StyledModal>
      <StyledModal.Top flip={flipCard}>
        <Profile hide={active} />
        <Projects isActive={active} />
      </StyledModal.Top>
      <StyledModal.Bottom>
        <ProfileSocials />
        <Button handleClick={showProjects} isActive={active} />
      </StyledModal.Bottom>
    </StyledModal>
  );
};

export { Modal };
