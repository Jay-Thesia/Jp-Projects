/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#142534",
        secondary:"#d9b27f",
        foreground: "#f8f8f8",
        ocean: "#FF8933",
        // ocean: "#00a8bf",
        "grey-light": "#e7e6ea",
        grey: "#c1c1c1",
        grey3: "#808080",
        tomato: "var(--tomato)",
        grey2: "#717171",
        dark: "#323232",
        grayNew: "#2E475D",
        orange: "#FF8933",
      },
      lineHeight: {
        1.2: "1.2",
      },
      container: {
        center: true,
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(180deg, #ffbc4b 0%, #e69000 100%)",
      },
      boxShadow: {
        "active-head": "0 0 20px #00000021",
        "auth-box": "0px 5px 15px rgb(0 0 0 / 15%)",
      },
      animation: {
        stickSlide:
          "stickSlide 0.5s cubic-bezier(0.42, 0, 0, 1.14) 2s 1 alternate forwards",
        stickSlideLeft:
          "stickSlideLeft 0.5s cubic-bezier(0.42, 0, 0, 1.14) 2s 1 alternate forwards",
        stickImg: "stickImg 0.6s linear",
        stickText: "stickText 0.6s linear",
      },
      keyframes: {
        stickSlide: {
          "0%": {
            opacity: "1",
            transform: "translateX(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
        },
        stickSlideLeft: {
          "0%": {
            opacity: "1",
            transform: "translateX(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
        },
        stickImg: {
          "0%": {
            top: "-40px",
            opacity: "0",
          },
          "100%": {
            top: "0",
            opacity: "1",
          },
        },
        stickText: {
          "0%": {
            bottom: "-40px",
            opacity: "0",
          },
          "100%": {
            bottom: "0",
            opacity: "1",
          },
        },
        maxHeight:{
          '12.5':'12.5rem'
        },
      
      },
    },
  },
  plugins: [],
};
