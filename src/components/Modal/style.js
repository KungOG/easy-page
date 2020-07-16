import styled from "styled-components";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 290px;
`;

StyledModal.Top = styled.div`
  position: relative;
  height: 340px;
  transition: margin 0.1s linear;
  margin: ${(props) => (props.flip ? "0 0 6px 0" : "")};
`;

StyledModal.Bottom = styled.div`
  padding: 0 5px 5px 5px;
  border-radius: 0 0 5px 5px;
  background: $color_white;
  position: relative;
`;

export default StyledModal;
