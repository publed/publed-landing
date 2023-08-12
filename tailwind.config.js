/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.tsx",
  ],
  theme: {
    extend: {
      spacing: {
        15: "3.75rem",
        30: "7.5rem",
        45: "11.25rem",
      },
      colors: {
        default: {
          40: "#A0A0A8",
          20: "#C8C8CE",
        },
        blue: {
          7: "#071C2F",
          6: "#012F59",
          5: "#202668",
          4: "#004A84",
          3: "#81C7FF",
          2: "#ADCAEB",
          1: "#DFEEFF",
        },
        secondary: {
          purple: "#8280FF",
          pink: "#C780FF",
          red: "#FF8080",
          yellow: "#FFB119",
          gradientSolutions:
            "linear-gradient(291deg, rgba(7, 28, 47, 0.00) 25%, #071C2F 100%)",
          gradientProblems:
            "linear-gradient(291deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
          blue60: "#03254D",
          white1: "#D9D9D9",
          blue: {
            80: "rgba(3, 37, 77, 0.80)",
            60: "rgba(3, 37, 77, 0.60)",
            40: "rgba(3, 37, 77, 0.40)",
          },
          "typo-white": "#f3f3f3",
        },
        background: "white",
      },
      fontFamily: {
        notosans: ["Noto Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "375px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    backgroundImage: {
      hero: "url('/src/assets/herobg.png')",
      droadmap: "url('/src/assets/roadmap_desktop_1.svg')",
      mroadmap: "url('/src/assets/roadmap_mobile_1.svg')",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      "100%": "100%",
    },
    backgroundPosition: {
      "bp-sm": "50% 40%",
      "bp-ss": "55% 32%",
      "bp-xs": "58% 32%",
      center: "center",
    },
    textColor: {
      default: {
        80: "#2E2E35",
        40: "#A0A0A8",
        20: "#C8C8CE",
      },
      "typo-dark-blue": "#202668",
      "typo-white": "#f3f3f3",
      "typo-grey": "#8a8a8a",
      "typo-dark-grey": "#3A3A3A",
      "typo-black": "#131317",
      "primary-blue": {
        3: "#81c7ff",
      },
      "secondary-pink": "#C780FF",
      "secondary-purple": "#8280FF",
    },
  },
  plugins: [],
};
