module.exports = {
  prefix: "tw-",
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: { max: "599px" },
      sm: { min: "600px", max: "959px" },
      md: { min: "960px", max: "1279px" },
      lg: { min: "1280px", max: "1919px" },
      xl: { min: "1920px" },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
