/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      listStyleType: {
        plant: 'plant',
        plane: 'plane',
      },
    },
  },
  plugins: [],
}
