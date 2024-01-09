module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        coffee: {
          200: '#c89f94',
          400: '#a25f4b'
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in'
      },
      backgroundImage: {
        'coffee-bg': 'url("./img/coffee_background.jpg")'
      }
    }
  },
  plugins: []
}
