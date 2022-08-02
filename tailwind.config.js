/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: [
    {
      lightTheme: {
        primary: "#a9fce0",

        secondary: "#7aa31b",

        accent: "#aad86a",

        neutral: "#1F1424",

        "base-100": "#F5F5F5",

        info: "#73A6D4",

        success: "#5DDFB4",

        warning: "#E98C1C",

        error: "#F9628A",
      },
      darkTheme: {
        primary: "#7f3ab7",

        secondary: "#d8562b",

        accent: "#a9f9e5",

        neutral: "#282F3E",

        "base-100": "#303A50",

        info: "#7EC4D7",

        success: "#1BB694",

        warning: "#FACC61",

        error: "#FC597D",
      },
    },
  ],
  plugins: [require("daisyui")],
  daisyui:{
    theme:["emerald","luxury"]
  }
};
