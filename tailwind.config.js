/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4e98e5",
        graySd: "#404152",
        darker: "#121212",
        dark: "#1D1D1F",
        darkestSd: "#070c13",
        blueLightSd: "#e9ecef",
        whiteLightSd: "#dfdfdf",
        oneLightSd: "#ffefb5",
        towLightSd: "#5960ff",
        towLightSd: "#e6f1ff",
      },
      fontFamily: {
        poppins: "poppins",
        cairo: "Cairo",
      },
      backgroundImage: {
        "hero-pattern-right": "url('./src/assets/images/banner-right')",
      },
    },
  },
  plugins: [],
};

// #df6145
// #4e98e5
