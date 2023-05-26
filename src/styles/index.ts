import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",

      gray100: "#e1e1e6",
      gray300: "#c4c4cc",
      gray800: "#202024",
      gray900: "#121214",

      green300: "#00b37e",
      green500: "#00875f",

      scrollbar: "#202024"
    },

    fontSizes: {
      sm: "1rem",
      md: "1.125rem",
      lg: "1.2rem",
      xl: "1.5rem",
      "2xl": "2rem",
    }
  }
});