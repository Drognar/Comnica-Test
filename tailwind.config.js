/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
          colors: {
              'primary-light': 'var(--primary-light)',
              'primary-light-50':  'color-mix(in srgb, var(--primary-light), transparent calc(100% * (1 - 0.2)))',
              'primary-light-90':  'color-mix(in srgb, var(--primary-light), transparent calc(100% * (1 - 0.4 )))',
              'primary-medium': 'var(--primary-medium)',
              'primary-dark': 'var(--primary-dark)',
              'black': 'var(--black)',
              'secondary': 'var(--secondary)'
          }
      },
    },
    plugins: [],
}

