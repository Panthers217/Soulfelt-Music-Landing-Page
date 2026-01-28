/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        soul: {
          50: '#fef7ed',
          100: '#fce8d1',
          200: '#f9d0a2',
          300: '#f6ae69',
          400: '#f28b3d',
          500: '#ef6f1b',
          600: '#df5210',
          700: '#b93b10',
          800: '#933115',
          900: '#762914',
        },
      },
    },
  },
}
