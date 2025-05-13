/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        keyframes: {
          blink: {
            "0%, 100%": { opacity: "1" },
            "50%": { opacity: "0" },
          },
          'gradient-x': {
            '0%, 100%': {
              'background-position': '0% 50%',
            },
            '50%': {
              'background-position': '100% 50%',
            },
          },
        },
        animation: {
          blink: "blink 1s step-start infinite",
          'gradient-x': 'gradient-x 6s ease-in-out infinite',
        },
        backgroundSize: {
          '200%': '200% 200%',
        },
      },
    },
  plugins: [],
}

