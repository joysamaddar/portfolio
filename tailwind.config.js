/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        gray: "var(--gray)",
        darkgray: "var(--darkgray)",
        graytransparent: "var(--graytransparent)"
      }
    },
  },
  plugins: [],
}
