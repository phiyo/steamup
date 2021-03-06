module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: 'hsl(207, 73%, 52%)',
          default: 'hsl(207, 73%, 57%)',
          darker: 'hsl(207, 73%, 44%)',
          yellow: 'hsl(48, 100%, 61%)',
          yellowdarker: 'hsl(40, 100%, 45%)',
          black: 'hsl(0, 0%, 10%)',
          red: 'hsl(4, 77%, 55%)'
        }
      },
      backgroundColor: ({
        'hotbanana': '#FFD73A'
      }),
      backgroundImage: ({
        'feature-img': "url('../assets/images/showcase.jpg')",
        'cloud': "url('../assets/images/cloud.png')",
        'cloud2': "url('../assets/images/cloud2.png')",
        'mountains': "url('../assets/images/mountains.png')",
        'mountains2': "url('../assets/images/mountains2.png')"
      }),
      backgroundSize: {
        '150%': '150%',
        '200%': '200%'
      },
      borderWidth: {
        '20': '20px'
      },
      width: {
        '20': '20px',
        '275': '275px',
        '300': '300px',
        '350': '350px',
        '400': '400px'
      },
      height: {
        '20': '20px'
      },
      inset: {
        '1/2': '50%',
        'full': '100%',
        '15': '15px',
        '25': '25px'
      },
      margin: {
        'n50': '50%',
        'n10px': '-10px'
      }
    }
  },
  variants: {
    visibility: ['group-focus'],
    position: ['group-focus']
  },
  plugins: []
};
