export const BASE_UNIT = "rem";
export const BASE_VALUE = BASE_UNIT === "px" ? 10 : 1;

const calcValue = (value) => {
  return BASE_VALUE * value;
};

/*
 * * Colors * *
 */
export const colors = {
  red: "#ff2323",
  gold: "#ecce66",
  black: "#000000",
  white: "#ffffff",
};

/*
 * * Spacers * *
 */
export const spacers = {
  xxLarge: `${calcValue(6.4)}${BASE_UNIT}`,
  xLarge: `${calcValue(4.8)}${BASE_UNIT}`,
  large: `${calcValue(3.6)}${BASE_UNIT}`,
  medium: `${calcValue(2.4)}${BASE_UNIT}`,
  base: `${calcValue(2)}${BASE_UNIT}`,
  small: `${calcValue(1.6)}${BASE_UNIT}`,
  xSmall: `${calcValue(0.8)}${BASE_UNIT}`,
  xxSmall: `${calcValue(0.4)}${BASE_UNIT}`,
  xxxSmall: `${calcValue(0.2)}${BASE_UNIT}`,

  circle: `${calcValue(99)}${BASE_UNIT}`,
  small_border: `${calcValue(0.5)}${BASE_UNIT}`,
};

/*
 * * Typography * *
 */
export const typography = {
  primaryFont: "Dosis",
  secondaryFont: "sans-serif",
  lineHeight: "1.5",
  letter_spacing: "1.5px",
  size: {
    xxLarge: `${calcValue(7)}${BASE_UNIT}`,
    xLarge: `${calcValue(4.8)}${BASE_UNIT}`,
    large: `${calcValue(3.2)}${BASE_UNIT}`,
    medium: `${calcValue(2.4)}${BASE_UNIT}`,
    base: `${calcValue(2)}${BASE_UNIT}`,
    small: `${calcValue(1.6)}${BASE_UNIT}`,
    xSmall: `${calcValue(1.4)}${BASE_UNIT}`,
    xxSmall: `${calcValue(1)}${BASE_UNIT}`,
  },
};

/*
 * * Animations * *
 */

export const animations = {
  speed: "0.3s",
};

/*
 * * Centering * *
 */
export const displayCenter = {
  allCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
