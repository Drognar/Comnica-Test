/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
          colors: {
              'primary-light': 'var(--primary-light)',
              'primary-medium': 'var(--primary-medium)',
              'primary-dark': 'var(--primary-dark)',
              'black': 'var(--black)',
              'secondary': 'var(--secondary)'
          }
      },
    },
    plugins: [],
}

