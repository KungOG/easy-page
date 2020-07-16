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
}

.App {
  background: ${colors.black};
  ${displayCenter.allCenter};
  height: 100vh;
  width: 100vw;
}

.fa.fa-facebook,
.fa.fa-twitter,
.fa.fa-github,
.fa.fa-linkedin {
  font-family: "Font Awesome 5 Pro";
  font-weight: 400;
  display: inline-block;
  font: normal normal normal ${typography.size.xSmall}/1 FontAwesome;
  font-size: ${typography.size.xSmall};
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

i {
  position: relative;
  transition: all 0.25s ease;
  color: ${colors.red};
}

::-webkit-scrollbar {
  display: none;
}
`;
