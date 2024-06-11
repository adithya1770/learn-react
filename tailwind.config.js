/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages"
  ],
  theme: {
    extend: {
      spacing: {
        '120': '30rem',
        '122': '31rem',
        '128': '32rem',
        '130': '34rem',
        '160': '40rem',
        '168': '44rem',
        '165': '43rem',
        '170': '45rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
      },
      width: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
      },
      height: {
        '128': '32rem',
        '160': '40rem',
        '170': '45rem',
        '192': '48rem',
        '224': '56rem',
        '256': '64rem',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '20rem',
        '15xl': '40rem',
        '20xl': '56rem',
        '22xl': '64rem',
      }
    },
  },
  plugins: [],
}
