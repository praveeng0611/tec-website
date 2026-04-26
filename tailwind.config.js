/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tec-navy':    '#0D1B2E',
        'tec-blue':    '#1B4080',
        'tec-blue-mid':'#1E5BA8',
        'tec-cyan':    '#29ABE2',
        'tec-light':   '#EEF4FB',
        'tec-card':    '#1A3F72',
        'tec-dark-bg': '#0A1525',
        'tec-dark-card':'#162844',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
