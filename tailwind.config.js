module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#F5F5F5',
        'search-grey': '#EFEFEF',
        'search-placeholder': '#8e8e8e',
      },
    },
  },
  variants: {
    extend: {
      padding: ['last'],
    }
  },
  plugins: [require('daisyui')],
}
