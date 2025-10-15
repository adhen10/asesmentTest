/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./barang/templates/**/*.html",
    "./akun/templates/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
