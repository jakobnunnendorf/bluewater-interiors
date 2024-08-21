import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        gold: "#FDEBBD", // Add your custom color here
      },
      fontFamily: {
        "gilroy-bold": ["Gilroy-Bold", "sans-serif"],
        "gilroy-heavy": ["Gilroy-Heavy", "sans-serif"],
        "gilroy-light": ["Gilroy-Light", "sans-serif"],
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "gilroy-regular": ["Gilroy-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
