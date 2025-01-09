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
        profile_div_bg: '#202737'
      }
    },
  },
  plugins: [],
}

