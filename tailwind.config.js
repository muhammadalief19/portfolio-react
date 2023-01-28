/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ['"Aboreto"', "cursive"],
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      keyframes: {
        "turun-naik": {
          "0%, 100%": { transform: "translate(0px,0px)" },
          "50%": { transform: "translate(0px,-60px)" },
        },
        "kanan-kiri-1": {
          "0%, 100%": { transform: "translate(0px,0px)" },
          "50%": { transform: "translate(-50px,0px)" },
        },
        "kanan-kiri-2": {
          "0%, 100%": { transform: "translate(0px,0px)" },
          "50%": { transform: "translate(-80px,0px)" },
        },
        "kelap-kelip": {
          "0%, 100%": { opacity: "1.0" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "up&down": "turun-naik 4s linear infinite",
        "left&right-1": "kanan-kiri-1 4s linear infinite",
        "left&right-2": "kanan-kiri-1 5s ease-in-out infinite",
        "left&right-3": "kanan-kiri-2 6s ease-in-out infinite",
        "a-disko": "kelap-kelip 200ms ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
