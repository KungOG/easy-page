import { createGlobalStyle } from "styled-components";
import { colors, typography, displayCenter } from "../utilites/variables";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

html {
  font-size: 62.5%;
}

html,
body {
  font-family: ${typography.primaryFont}, ${typography.secondaryFont};
  line-height: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.App {
  background: ${colors.black};
  ${displayCenter.allCenter};
  height: 100vh;
  width: 100vw;
}

::-webkit-scrollbar {
  display: none;
}
`;
