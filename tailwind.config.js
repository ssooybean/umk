/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ['./*.html', './scripts/main.js'],
  },
  theme: {
    extend: {
      colors: {
        green: '#249C78',
        neutral: {
          900: '#1D1B20',
          800: '#424242',
          700: '#2F2F2F',
          600: '#9E9E9E',
          300: '#EDEDED',
          100: '#757575',
        },
      },
      fontFamily: {
        sans: ['Raleway'],
      },
      screens: {
        '3xl': '1800px',
      },
      translate: {
        center: '-50%',
      },
    },
    plugins: [],
  },
};
