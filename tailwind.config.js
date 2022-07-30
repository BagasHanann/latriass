/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1080px'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      const utilities = {
        '.bg-search': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_7_751)'%3E%3Cpath d='M19.7556 18.5774L14.0682 12.89C15.1699 11.5292 15.8332 9.80003 15.8332 7.91672C15.8332 3.55177 12.2815 0.00012207 7.91656 0.00012207C3.55161 0.00012207 0 3.55173 0 7.91669C0 12.2816 3.55165 15.8333 7.9166 15.8333C9.7999 15.8333 11.5291 15.17 12.8899 14.0683L18.5773 19.7558C18.7398 19.9182 18.9531 19.9999 19.1665 19.9999C19.3798 19.9999 19.5932 19.9182 19.7557 19.7558C20.0815 19.4299 20.0815 18.9033 19.7556 18.5774ZM7.9166 14.1666C4.46996 14.1666 1.66666 11.3633 1.66666 7.91669C1.66666 4.47004 4.46996 1.66675 7.9166 1.66675C11.3632 1.66675 14.1665 4.47004 14.1665 7.91669C14.1665 11.3633 11.3632 14.1666 7.9166 14.1666Z' fill='%2310B981' fill-opacity='0.5'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_7_751'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '20px',
          backgroundColor: 'white'
        }
      }

      addUtilities(utilities);
    })
  ],
}
