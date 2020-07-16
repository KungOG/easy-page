import styled, { css } from "styled-components";
import { colors, spacers } from "../../styles/utilites/variables";

const StyledSlider = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
  transform: translateX(
    calc(
      ${(props) =>
        props.currentSlide === 0 ? "0px" : `-300px * ${props.currentSlide}`}
    )
  );
`;

StyledSlider.Bullets = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -${spacers.medium};
  left: 0;
  right: 0;
  list-style: none;
`;

StyledSlider.Bullet = styled.button`
  transition: background-color 0.3s;
  width: 13px;
  height: 13px;
  border: ${spacers.xxxSmall} solid ${colors.white};
  background: none;
  border-radius: 100%;
  outline: none;
  cursor: pointer;
  transition: background 0.7s;

  ${(props) =>
    props.currentSlide &&
    css`
      background: ${colors.gold};
      border: 0;
    `}

  &:not(:last-child) {
    margin-right: ${spacers.xSmall};
  }
`;

export default StyledSlider;
