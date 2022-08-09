/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm': {'max': '470px'},
      'md': {'max': '768px'},
      'lg': {'max': '992px'},
      'xl': {'min': '1780px'},
      'ad':{'max':'360px'},
    },

    container:{
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        primary: '#575445',
        secondary: '#E6B939',
        whiteLight: '#FAFAFC',
        gray: '#6F7278',
        green: '#575445',
        lightGray: '#CACCD1',
        lightBlack: '#292C32',
      },
    },


  },
  plugins: [],
}
