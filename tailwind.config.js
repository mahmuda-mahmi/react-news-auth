const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        pirata: 'Pirata One, system-ui',
        poppins: 'Poppins, sans-serif',
      }
    },

  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
}