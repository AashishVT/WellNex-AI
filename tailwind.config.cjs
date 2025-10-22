module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        medai: {
          DEFAULT: '#0E7490',
          accent: '#14B8A6'
        }
      },
      borderRadius: {
        'lg-2': '1rem'
      }
    }
  },
  plugins: []
}
