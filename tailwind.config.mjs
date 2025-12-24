/** @type {import('tailwindcss').Config} */
export default {
  // 記得這裡要加上 'dark'，因為你的設計是深色模式
  darkMode: 'class', 
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "primary": "#135bec",
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "surface-dark": "#1c1f27",
        "surface-darker": "#111318",
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}