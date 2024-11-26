/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors:{
        'custom-brown': '#4e381c',
      },
      fontFamily:{
        maragsa:['Maragsa','maragsa'],
        metropolis:['Metropolis','metropolis'],
      },
      fontWeight: {
        extralight: '200',
      },
    },
  },
  plugins: [require('daisyui'),],
}

