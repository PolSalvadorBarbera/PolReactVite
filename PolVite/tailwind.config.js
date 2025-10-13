// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esto le dice a Tailwind que busque en todos los archivos JS, TS, JSX, TSX dentro de la carpeta src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}