module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        gabriela: ['"Gabriela"', 'serif'],
        viaoda: ['"Viaoda Libre"', 'serif', 'cursive'],
        oswald: ["'Oswald'", 'sans-serif'],
        parisienne: ['"Parisienne"', 'cursive'],
        lexend: ['"Lexend Deca"', 'sans-serif'],
      },
      keyframes: {
        'pulse-border': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
      animation: {
        'pulse-border': 'pulse-border 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}
