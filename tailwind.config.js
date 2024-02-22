/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: {
            500: '#BADF93',
            700: '#9EBD7E'
          },
          sky: {
            200: '#B8D8EB'
          },
          emerald: {
            900: '#153E35',
          }
        }
      },
      fontFamily: {
        'roboto': ["Roboto", "sans-serif"],
        'manrope': ["Manrope", "sans-serif"],
        'tt-norms': ["TT Norms", "sans-serif"]
      },
      fontSize: {
        15: '15px',
      },
      lineHeight: {
        30: '30px',
      },
      maxWidth: {
        base: "1390px",
      },
      backgroundImage: {
        videoBg: "url('../images/background/video-bg.jpg')",
        bannerBg: "url('../images/background/clinic-native.png')",
      },
      spacing: {
        50: '50px',
      },
      borderRadius: {
        3: '3px',
        15: '15px',
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