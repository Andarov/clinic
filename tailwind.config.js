/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        brand:{
          lime:{
            500: '#BADF93',
            700: '#9EBD7E'
          },
          sky: {
            200: '#B8D8EB'
          },
          emerald:{
            900: '#153E35',
          }
        }
      },
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'Manrope': ["Manrope", "sans-serif"],
        'ttnorms': ["TT Norms", "sans-serif"]
      },    
      fontSize: {
        15: '15px',
      },
      lineHeight: {
        30: '30px',
      },
      maxWidth:{
        base: "1388px",
      },
      backgroundImage:{
        videoBg: "url('./images/video-bg.jpg')"
      },
      width: {
        50: '50px',
      },
      height: {
        50: '50px',
      },
      borderRadius: {
        3: '3px'
      },
    },

    screens: {
      'mobile-m': '375px',
      'mobile-l': '425px',
      '520': '520px',
      'sm': '640px',
      'md': '768px',
      '890': '890px',
      'lg': '1024px',
      'xl': '1280px',
    } 
  },
  plugins: [],
}