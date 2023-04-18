/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bodyBg : '#b3cde0',
        darkBg :'#03396c', //#b3cde0
        extraDark : '#011f4b',
        primary : '#6497b1',
        accent : '#005b96',
        textColor : '#d8d8d8',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

