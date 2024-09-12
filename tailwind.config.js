/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./dist/*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#1DD100', // rgb(29, 209, 0)
        'primaryColorA10': 'rgba(29, 209, 0, .1)',
        'primaryColorA40': 'rgba(29, 209, 0, .4)',
        'secondaryColor': '#030712', // rgb(3, 7, 18)
        'secondaryColorA40': 'rgba(3, 7, 18, 0.4)',
        'secondaryColorA50': 'rgba(3, 7, 18, 0.5)',
        'secondaryColorA60': 'rgba(3, 7, 18, 0.6)',
        'secondaryColorA80': 'rgba(3, 7, 18, 0.8)',
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

