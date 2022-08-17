/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': {
          50: '#F7FAFF',
          100: '#F0F6FF',
          200: '#BBDFFE',
          300: '#8DCAFD',
          400: '#5FB5FC',
          500: '#1B95FA',
          600: '#1677C8',
          700: '#105996',
          800: '#0B3C64',
          900: '#051E32',
        },
        gray: {
          50: '#FAFBFC',
          100: '#DFE2E8',
          200: '#D0D4DB',
          300: '#A7B1BF',
          400: '#8591A2',
          500: '#6A7686',
          600: '#4D5866',
          700: '#3A434D',
          800: '#272D33',
          900: '#14171A',
        },
        green: {
          100: '#D1F1BB',
          200: '#B5E891',
          300: '#99E067',
          400: '#7CD73C',
          500: '#63BA2A',
          600: '#4D901D',
          700: '#356614',
          800: '#203A0C',
          900: '#0C1504',
        },
        red: {
          100: '#FFDFDB',
          200: '#FEB0A9',
          300: '#FD8276',
          400: '#FD5443',
          500: '#FD271C',
          600: '#DA1416',
          700: '#A8100E',
          800: '#750A06',
          900: '#420502',
        },
        yellow: {
          100: '#FFEBCC',
          200: '#FED799',
          300: '#FEC366',
          400: '#FEAF33',
          500: '#FD9926',
          600: '#CC7C1D',
          700: '#995D13',
          800: '#663E09',
          900: '#321F02',
        },
        'save-background': '#EFF0F3',
        'light-background': '#F3F5F7',
        'main-background': '#F5F7F9',
        'dark-overlay': '#272D337A',
        'profile-picture': '#F1F1F2'
      },
      fontSize: {
        '2.5xl': '1.75rem'
      },
      boxShadow: {
        'lg': '0px 17px 27px rgba(5, 30, 50, 0.06)',
        'dropdown': '0 29px 48px #0b3c641a',
        'featured-box': '0px 24px 32px rgba(11, 60, 100, 0.12)',
        'job-box': '0px 29px 48px rgba(11, 60, 100, 0.1)'
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
        },
        screens: {
          xl: '1120px'
        }
      },
      borderWidth: {
        '7': '7px'
      },
      margin: {
        'nav-height': '88px'
      },
      width: {
        'auth-blue': '32.125rem',
        'auth-small': '20rem',
      },
      minWidth: {
        'featured-card': '21.5rem'
      },
      height: {
        'job-description': 'calc(100vh - 144px)',
        'one': '1px',
        'input': '44px',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'isax': ['iconsax']
      },
      fontSize: {
        '4.5xl': '40px'
      },
      lineHeight: {
        12: '3.8rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
