const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1C',
        secondary: '#FFFFFF',
        accent: '#C1664E',
        background: '#F9F7F2',
        surface: '#FFFFFF',
        text: '#2D2D2D',
        muted: '#9E9E9E',
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['Manrope', 'sans-serif'],
        accent: ['Outfit', 'sans-serif'],
      },
      spacing: {
        base: '8px',
        section: '80px',
        card: '24px',
      },
      borderRadius: {
        small: '4px',
        medium: '8px',
        large: '16px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.03)',
        hover: '0 12px 30px rgba(0,0,0,0.08)',
        modal: '0 20px 40px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};