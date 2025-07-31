/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FF9F7F',
          DEFAULT: '#FF7F50',
          dark: '#E56A3D',
        },
        secondary: {
          light: '#A7F3D0',
          DEFAULT: '#6EE7B7',
          dark: '#34D399',
        },
        accent: {
          light: '#FDE68A',
          DEFAULT: '#FCD34D',
          dark: '#FBBF24',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};