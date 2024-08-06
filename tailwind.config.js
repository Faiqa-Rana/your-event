/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fbb4cf',
          100: '#faa5c5',
          200: '#f996bb',
          300: '#f887b1',
          400: '#f778a8',
          500: '#f6699e',
          600: '#dd5f8e',
          700: '#c5547e',
          800: '#ac4a6f',
          900: '#943f5f',
        },
      },
      maxWidth: {
        container: '1260px',
      },
    },
  },
  plugins: [],
};
