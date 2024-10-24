/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./components/ReusableComponenets/*.jsx",
    ],
  },

  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("tailwind-container-break-out")],
};
