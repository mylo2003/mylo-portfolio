/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rajdhani': ["Rajdhani", 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(#735084, #322439)',
        'noise': "url('/src/assets/nnnoise.svg')",
      },
    },
  },
  plugins: [],
}
