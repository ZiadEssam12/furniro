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
    extend: {},
  },
  plugins: [require("tailwind-container-break-out")],
};
