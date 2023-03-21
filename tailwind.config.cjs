/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'hero-pattern': "url('/assets/topHeaderImages/speaktruthLogo.png')",
      // },
      colors: {
        primary: {
          'primary': '27A2DB',
          'bg-gray': 'D9D9D9',
        }
      }
    },
  },
  plugins: [],
}
