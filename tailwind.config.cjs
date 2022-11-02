/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" },
        222: "#222222",
        FFC: "#FFC43F",
        F1F: "#F1F1F1",
        898: "#898989",
        818: "#818181",
        "9D9":"#9D9D9D",
        DED:"#DEDEDE",
        F6F:"#F6F6F6",
        F8F:"#F8F8F8",
        F9F:"#F9F9F9",
        FFA:"#FFA801",
        F7F:"#F7F7F7",
        FF6:"#FFF6E2",
        FF7:"#FFF7EA",
        E6F:"#E6F3FA",
        ED8:"#ED8939",
        727:"#727272",
        EEF:"#EEF5E4",
        252:"#252525",
        F9E:"#F9ECDE",
        787:"#787878",
        F1F:"#F1F1F1",
        FBF:"#FBFBFB",
        C7C:"#C7C7C7",
        333:"#333333",
        E2E:"#E2E2E2",
        EAE:"#EAEAEA",
        FFE:"#FFEADA",
        E1F:"#E1F7F9",
        777:"#777777",
        BC4:"#BC4B68",
        A8A:"#A8A8A8",
        A3B:"#A3BF4C",
        E9F:"#E9F3F8",
        555:"#555555",
        ECE:"#ECECEC",
        747:"#747474",
        FF9:"#FFF9EB",
        949:"#949494",
        F4F:"#F4F4F4",
        FCF:"#FCF7EB",
        EDE:"#DEDEDE",
      }
    }
  },
  plugins: [],
}
