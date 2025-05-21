/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'ds-primary-bg': '#1A202C',      // Dark slate gray (main background)
        'ds-secondary-bg': '#2D3748',  // Lighter slate gray (card/section backgrounds)
        'ds-accent': '#3182CE',          // Strong blue (accents, links, buttons)
        'ds-text-primary': '#E2E8F0',    // Light gray (primary text)
        'ds-text-secondary': '#A0AEC0',   // Medium gray (secondary text)
        'ds-highlight': '#63B3ED',        // Lighter blue (highlights, hovers)
        primary: '#1A202C', // ds-primary-bg
        secondary: '#3182CE', // ds-accent
        tertiary: '#2D3748', // ds-secondary-bg (example, can be adjusted)
        'white-100': '#E2E8F0', // ds-text-primary
        'black-100': '#1A202C', // ds-primary-bg (example, for contrast elements if needed)
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
