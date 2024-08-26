module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        bluewood: '#2b3d4f',
        kashmir: '#4b6b95',
        oslo: '#808d8e',
        gothic: '#6f93a5',
        cascade: '#95a6a7',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add Raleway font here
        karla: ['Karla',  'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      fontSize: {
        '50': '50px', // Add custom font size
        '30': '30px',
      },

      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
    },
  },
},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};