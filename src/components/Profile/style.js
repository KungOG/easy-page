import styled from "styled-components";
import {
  spacers,
  colors,
  typography,
  displayCenter,
} from "../../styles/utilites/variables";

const StyledProfile = styled.div`
  background: ${colors.white};
  ${displayCenter.allCenter};
  flex-direction: column;
  padding: ${spacers.small_border} ${spacers.small_border} 0
    ${spacers.small_border};
  border-radius: ${spacers.small_border} ${spacers.small_border} 0 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  transition: transform 0.7s 0.25s;
  transform: ${(props) => (props.hide ? "rotateY(180deg)" : "0")};
`;

StyledProfile.Picture = styled.div`
  ${displayCenter.allCenter}
  height: calc(100% - 100px);
  width: 100%;
`;

StyledProfile.Image = styled.div`
  height: 120px;
  width: 120px;
  border-radius: ${spacers.circle};
  background: no-repeat center center;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

StyledProfile.Text = styled.div`
  ${displayCenter.allCenter}
  flex-direction: column;
  height: 200px;
  width: 100%;
`;

StyledProfile.Name = styled.h1`
  font-size: ${typography.size.medium};
  color: ${colors.red};
  letter-spacing: ${typography.letter_spacing};
`;

StyledProfile.Work = styled.h2`
  font-size: ${typography.size.small};
  margin-top: ${spacers.xxSmall};
  letter-spacing: 1px;
`;

StyledProfile.Paragraph = styled.p`
  max-width: 80%;
  font-size: ${typography.size.xSmall};
  text-align: center;
  margin-top: ${spacers.small};
  line-height: 1.7rem;
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
  ${displayCenter.allCenter}
  position: relative;
  text-decoration: none;
  width: 26px;
  height: 26px;
  padding: 1px ${spacers.xxSmall};

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
    box-shadow: inset 0 0 0 ${spacers.base} ${colors.red};
  }

  &:hover > i {
    color: ${colors.white};
  }
`;

export default StyledProfile;
