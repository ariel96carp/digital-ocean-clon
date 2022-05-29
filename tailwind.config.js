module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": "'Work Sans', sans-serif",
        "cascadia": "CascadiaCode"
      },
      colors: {
        "do-blue-dark": "#080c2d",
        "do-blue-mediumdark": "#1d274c",
        "do-blue-light": "rgb(0, 105, 255)",
        "do-blue-medium": "rgb(20, 86, 255)"
      },
      content: {
        "link": "url('/img/down-arrow.png')"
      },
      gridTemplateColumns: {
        "hero": "2fr 1fr"
      }
    },
  },
  plugins: [],
}
