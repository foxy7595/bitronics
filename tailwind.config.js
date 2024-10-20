module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1080px" },
      sm: { max: "768px" },
      lg: { max: "1440px" },
    },
    extend: {
      colors: {
        blue: { 50: "var(--blue_50)", 800: "var(--blue_800)" },
        blue_gray: { 400: "var(--blue_gray_400)" },
        gray: {
          50: "var(--gray_50)",
          100: "var(--gray_100)",
          200: "var(--gray_200)",
          300: "var(--gray_300)",
          900: "var(--gray_900)",
        },
        indigo: { 100: "var(--indigo_100)" },
        light_blue: {
          400: "var(--light_blue_400)",
          a200: "var(--light_blue_a200)",
        },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: {},
      fontFamily: {
        notosanscjkjp: "Noto Sans Javanese",
        urbanist: "Urbanist",
        trirong: "Trirong",
      },
      backgroundImage: { gradient: "linear-gradient(270deg, #29b6f6,#1565c0)" },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-bottom": {
          "0%": { transform: "translateY(-30px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "show-menu": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0px)" },
        },

        "show-menu-item": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "hide-menu": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "move-up-down": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "slide-left-100": {
          "0%": { width: "0px" },
          "100%": { width: "100%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-left": "slide-left 360s linear infinite",
        "slide-left-10": "slide-left 10s linear infinite",
        "slide-left-20": "slide-left 20s linear infinite",
        "slide-left-5": "slide-left 5s linear infinite",
        "slide-bottom": "slide-bottom 0.3s linear",
        "show-menu": "show-menu 0.3s linear",
        "show-menu-item": "show-menu-item 1s linear",
        "hide-menu": "hide-menu 0.3s linear",
        "move-up-down": "move-up-down 2.5s linear infinite",
        "slide-left-100": "slide-left-100 1.5s linear forwards 0.5s",
        "fade-in": "fade-in 1s linear forwards 1.5s",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
