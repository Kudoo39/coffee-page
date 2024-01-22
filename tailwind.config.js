module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        coffee: {
          50: '#e8d6d0',
          200: '#c89f94',
          400: '#a25f4b',
          600: '#744838'
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        }
      },
      animation: {
        slideDown: 'slideDown 0.4s ease-in',
        fadeIn: 'fadeIn 0.5s ease-in-out'
      },
      backgroundImage: {
        'coffee-bg': 'url("./img/coffee_background.jpg")'
      }
    }
  },
  plugins: []
}
