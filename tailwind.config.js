/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{css,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        light: '#6C41F2',
        DEFAULT: '#6C41F2',
        dark: '#6C41F2',
      },
      secondary: {
        light: '#FBE4AB',
        DEFAULT: '#FBE4AB',
        dark: '#FBE4AB',
      },
      neutral: {
        light: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        dark: '#272727',
      },
    },
    extend: {},
  },
  plugins: [],
};
