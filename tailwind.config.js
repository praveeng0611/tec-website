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
        // CSS custom properties drive all TEC colors — fire theme overrides them globally
        'tec-navy':      'rgb(var(--tec-navy) / <alpha-value>)',
        'tec-blue':      'rgb(var(--tec-blue) / <alpha-value>)',
        'tec-blue-mid':  'rgb(var(--tec-blue-mid) / <alpha-value>)',
        'tec-cyan':      'rgb(var(--tec-cyan) / <alpha-value>)',
        'tec-light':     'rgb(var(--tec-light) / <alpha-value>)',
        'tec-card':      'rgb(var(--tec-card) / <alpha-value>)',
        'tec-dark-bg':   'rgb(var(--tec-dark-bg) / <alpha-value>)',
        'tec-dark-card': 'rgb(var(--tec-dark-card) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
