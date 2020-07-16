import styled from "styled-components";
import { colors, spacers } from "../../styles/utilites/variables";

const StyledProjects = styled.div`
  background: ${colors.white};
  display: flex;
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
  z-index: 2;
  transform: rotateY(${(props) => (props.hide ? "0deg" : "180deg")});
`;

export default StyledProjects;
