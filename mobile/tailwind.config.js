/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff)',
        'main-gradient': 'linear-gradient(45deg, rgb(254, 81, 150), rgb(247, 112, 98))',
        'simple-gradient': 'linear-gradient(to right, #ff7e5f, #feb47b)',
        'grad-pic': 'linear-gradient(270deg, rgba(176, 42, 42, 0.16) 0%, rgba(176, 42, 42, 0.56) 18.45%, rgba(176, 42, 42, 0.8) 49.67%, rgba(176, 42, 42, 0.56) 82.52%, rgba(176, 42, 42, 0.196364) 99.7%, rgba(189, 40, 40, 0) 99.71%, rgba(203, 56, 55, 0) 99.72%, rgba(203, 56, 55, 0.16) 99.73%), url(https://static-production.npmjs.com/abf53a31b2da4657a1a004ee9358551c.png)',
      },
    },
  },
  plugins: [],
};
