module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wellnex: {
          DEFAULT: '#0E7490',
          accent: '#14B8A6',
          muted: '#64748B',
          bg: '#FFFFFF'
        }
      },
      borderRadius: {
        'lg-2': '1rem'
      }
    }
  },
  plugins: []
}
