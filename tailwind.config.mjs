/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
    logs: false
  }
};
