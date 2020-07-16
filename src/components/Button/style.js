import styled from "styled-components";

const StyledButton = styled.button`
  background: $color_white;
  outline: none;
  border: none;
  width: 100%;
  padding: 0;
  margin-top: 10px;
  cursor: pointer;

  > span {
    width: 100%;
    color: $color_red;
    line-height: 23px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: center;
  }

  &.-inactive {
    span {
      opacity: 1;
      position: relative;
      display: inline-block;
      text-transform: uppercase;
      animation: activeOpacityButton 0.5s linear forwards;

      &:hover {
        &:after {
          opacity: 1;
          transform: translateY(0) rotateX(0);
        }

        &:before {
          opacity: 0;
          transform: translateY(50%) rotateX(90deg);
        }
      }

      &::after,
      &::before {
        top: 0;
        left: 0;
        display: block;
        line-height: 23px;
        transition: $speed;
      }

      &::after {
        opacity: 0;
        width: 100%;
        color: #323237;
        position: absolute;
        content: attr(data-back);
        transform: translateY(-50%) rotateX(90deg);
      }

      &::before {
        opacity: 1;
        color: #adadaf;
        position: relative;
        content: attr(data-front);
        transform: translateY(0) rotateX(0);
      }
    }
  }

  &.-active {
    animation: activeOpacityButton 0.65s linear forwards;
  }
`;

export default StyledButton;
