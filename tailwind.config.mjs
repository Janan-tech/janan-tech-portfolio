/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      padding: "25px",
      center: true,
    },
    colors: {
      primary: "var(--primary)",
      gray: "var(--gray)",
    },
    extend: {},
  },
  plugins: [],
};
