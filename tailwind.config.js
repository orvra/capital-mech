/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { screens: {
      'custom': '1040px',
      'xxs': '425px',
    },},
  },
  plugins: [],
}

