module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '750': '750ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
        '5000': '5000ms'
       },
       colors:{
        //Primary colors
        "primary": "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",

        "on-primary": "var(--on-primary)",
        "on-primary-light": "var(--on-primary-light)",
        "on-primary-dark": "var(--on-primary-dark)",


        //Secondary colors
        "secondary": "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        "secondary-dark": "var(--secondary-dark)",

        "on-secondary": "var(--on-secondary)",
        "on-secondary-light": "var(--on-secondary-light)",
        "on-secondary-dark": "var(--on-secondary-dark)",


        "page-background": "var(--page-background)",
        "surface": "var(--surface)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
