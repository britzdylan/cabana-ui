/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('cabana-ui')],
};
