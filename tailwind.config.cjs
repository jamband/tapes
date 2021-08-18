/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  mode: "jit",
  darkMode: false,
  purge: ["./src/**/*.{html,js,svelte,ts}"],
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
      "3xl": ["1.65rem", "2.5rem"],
      "4xl": ["2rem", "2.5rem"],
    },
    extend: {
      colors: {
        gray: {
          100: "#d8dee9",
          700: "#2e3440",
          800: "#2c313d",
          900: "#21252e",
        },
      },
      height: {
        "70vh": "70vh",
      },
    },
    // plugins
    aspectRatio: {
      1: "1",
      9: "9",
      16: "16",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
