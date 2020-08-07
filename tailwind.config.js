const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    minWidth: {
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
      "w-screen-sm": "640px",
      "w-screen-md": "768px",
      "w-screen-lg": "1024px",
      "w-screen-xl": "1280px",
      none: "none",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
  purge: false,
};

