module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rowdies: ["Rowdies", "cursive"],
        Montserrat: ["Montserrat", "sans-serif"],
        PermanentMarker: ["Permanent Marker", "cursive"],
        BebasNeue: ["Bebas Neue", "cursive"],
      },

      screens: {
        'xs' : '380px'
      },
    },
  },
  plugins: [],
}