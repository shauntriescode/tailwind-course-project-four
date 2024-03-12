/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.{html,js}"],
  screens: {
    sm:'480px',
    md:'768px',
    lg:'967px',
    xl:'1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        san: ['Barlow Semi Condensed', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}