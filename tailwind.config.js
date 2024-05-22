/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./dist/*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#AE862D', // rgb(174, 134, 45)
        'gradient1': 'rgba(52, 58, 64, 0.1)',
        'gradient2': 'rgba(174, 134, 45, .15)',
        'galleryGradient': 'rgba(174, 134, 45,.8)',
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

