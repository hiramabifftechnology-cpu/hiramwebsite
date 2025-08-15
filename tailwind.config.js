/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ford-blue': '#003f7f',
        'hac-blue': '#1e40af',
      },
    },
  },
  plugins: [],
};
