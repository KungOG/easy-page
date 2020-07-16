import styled from "styled-components";
import { spacers, colors, typography } from "../../styles/utilites/variables";

const StyledProfile = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  padding: 5px 5px 0 5px;
  border-radius: 5px 5px 0 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  transition: transform 0.7s 0.25s;
  z-index: 2;
  transform: ${(props) => (props.hide ? "rotateY(180deg)" : "0")};
`;

StyledProfile.Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 80px);
  width: 100%;
`;

StyledProfile.Image = styled.div`
  height: 120px;
  width: 120px;
  border-radius: ${spacers.circle};
  background: no-repeat center center;
  background-size: cover;
`;

StyledProfile.Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
`;

StyledProfile.Name = styled.h1`
  margin: 0;
  font-size: ${typography.size.medium};
  color: ${colors.red};
  letter-spacing: ${typography.letter_spacing};
`;

StyledProfile.Work = styled.h2`
  margin-top: 0;
  font-size: ${typography.size.base};
`;

StyledProfile.Paragraph = styled.p`
  max-width: 70%;
  font-size: ${typography.size.xSmall};
  text-align: center;
  margin-top: ${spacers.xxSmall};
`;

StyledProfile.Links = styled.div`
  background: ${colors.white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 50px;
  width: 100%;
`;

StyledProfile.Link = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 26px;
  height: 26px;
  padding: 1px 4px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
    border-radius: ${spacers.circle};
  }

  &::before {
    transition-duration: 0.5s;
    box-shadow: inset 0 0 0 1px ${colors.red};
  }

  &:hover::before {
    box-shadow: inset 0 0 0 20px ${colors.red};
  }

  &:hover > i {
    color: ${colors.white};
  }
`;

export default StyledProfile;
