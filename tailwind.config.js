/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6200ee',
          on: '#ffffff',
        },
        secondary: {
          DEFAULT: '#03dac6',
          on: '#000000',
        },
        background: {
          DEFAULT: '#ffffff',
          on: '#000000',
        },
        surface: {
          DEFAULT: '#ffffff',
          on: '#000000',
        },
        error: {
          DEFAULT: '#b00020',
          on: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      boxShadow: {
        small: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
        medium: '0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        large: '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
    },
  },
  plugins: [],
};
