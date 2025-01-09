/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar_bg: '#303a46',
        nav_text: '#949eaa',
        profile_bg: '#f7c3b1' ,
        profile_text: '#734338',
        profile_div_bg: '#202737',
        hero_left_bg: '#f7f6fc',
        hero_left_font: '#6d6a9e',
        hero_left_icon: '#d8d8f0'
      }
    },
  },
  plugins: [],
}

