/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    boxShadow: {
      clayMorphism: 'inset -0.6em -0.6em 1em #bfd1ff, inset 0.4em 0.4em 0.5em #eff3ff, 0.8em 0.8em 2em #839ad7',
      reverse_clayMorphism: 'inset -0.6em -0.6em 1em #bfd1ff, inset 0.4em 0.4em 0.5em #eff3ff, 0.8em 0.6em 0.6em -0.3em #839ad7',
    }
  },
  },
  plugins: [],
}