/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#1b3252',
        filterColor: '#efefef',
        cardBg: '#e0d9cf'
      },
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        'lg': '1200px', // Custom breakpoint for large screens
      },
    },
  },
  plugins: [],
}


