import styled from "styled-components";
import { colors } from "../../styles/utilites/variables";

const StyledProjects = styled.div`
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
  transform: rotateY(${(props) => (props.hide ? "0deg" : "180deg")});
`;

export default StyledProjects;
