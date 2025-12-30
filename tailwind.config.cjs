/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'nocap-cream': '#FEFCE8',
        'nocap-yellow': '#FEF08A',
        'nocap-lime': '#D9F99D',
        'nocap-blue': '#60A5FA',
        'nocap-pink': '#F9A8D4',
      },
      boxShadow: {
        'nocap-offset': '4px 4px 0px 0px rgba(0, 0, 0, 1)',
        'nocap-offset-sm': '2px 2px 0px 0px rgba(0, 0, 0, 1)',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
