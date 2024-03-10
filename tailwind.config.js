/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#f1f1f1',
        'gray-dark': '#323233',
        'blue-light': '#0066ff',
        'white-0': '#ffffff',
        'white': '#fbfbfb',
        'blue': '#007efc',
      },
    },
  },
  plugins: [],
}

