/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./dist/*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#1DD100', // rgb(29, 209, 0)
        'primaryColorA10': 'rgba(29, 209, 0, .1)', // rgb(29, 209, 0)
        'primaryColorA40': 'rgba(29, 209, 0, .4)', // rgb(29, 209, 0)
        'secondaryColor': '#030712', // rgb(3, 7, 18)
        'secondaryColorA60': 'rgba(3, 7, 18, 0.6)', // rgb(3, 7, 18)
      },
    },
    container: {
      padding: {
        DEFAULT: '15px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px'
      }
    },
  },
  plugins: [],
}

