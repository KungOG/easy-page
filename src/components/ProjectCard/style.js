import styled, { css } from "styled-components";
import { spacers, colors, typography } from "../../styles/utilites/variables";

const StyledProjectCard = styled.div`
  background: ${colors.gold};
  height: 100%;
  min-width: 100%;
  margin-right: ${spacers.base};
  opacity: 0;
  transition: cubic-bezier(1, 0, 0, 1) 0.5s;
  border-radius: 5px;
  position: relative;
  background: no-repeat center center;
  background-image: url(${(props) => props.image});
  background-size: cover;
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
      transition: cubic-bezier(1, 0, 0, 1) 0.1s;
    `}
`;

StyledProjectCard.Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  height: 100%;
  z-index: 2;
  left: 0;
  right: 0;
`;

StyledProjectCard.Name = styled.h1`
  font-size: ${typography.size.large};
  text-align: center;
  margin-top: ${spacers.large};
  text-transform: uppercase;
`;

StyledProjectCard.Content = styled.p`
  display: block;
  font-size: ${typography.size.small};
  text-align: center;
  color: ${colors.black};
  margin-top: ${spacers.large};
  font-weight: 600;
  max-width: 90%;
`;

StyledProjectCard.Link = styled.a`
  color: ${colors.black};
  font-size: ${typography.size.small};
  margin-top: auto;
  margin-bottom: ${spacers.xLarge};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
`;

StyledProjectCard.Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  pointer-events: none;
  background-color: ${colors.white};
  background: linear-gradient(
    to top,
    white 0%,
    rgba(255, 255, 255, 0.65) 50%,
    rgba(255, 255, 255, 0.65) 100%
  );

  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${colors.white}, endColorstr=${colors.white}, GradientType=1 );
`;
export default StyledProjectCard;
