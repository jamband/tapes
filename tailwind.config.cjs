module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    container: {
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    fontSize: {
      xxs: ["0.675rem"],
      xs: ["0.8125rem"],
      sm: ["0.9375rem"],
      base: ["1.0625rem", "1.65rem"],
      "2xl": ["1.25rem", "1.65rem"],
      "3xl": ["1.65rem", "2.0rem"],
      "4xl": ["2rem", "2.5rem"],
    },
    extend: {
      colors: {
        gray: {
          100: "#eceff4",
          200: "#dbdee3",
          400: "#b7b4c7",
          500: "#a6a3b6",
          700: "#24222b",
          800: "#13111a",
          900: "#02000b",
        },
      },
      height: {
        "70vh": "70vh",
      },
    },
  },
};
