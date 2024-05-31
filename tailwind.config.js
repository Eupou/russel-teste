/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'default-black': 'rgb(1, 1, 1)',
        "default-purple": "rgb(84, 56, 255)",
        "default-hover-purple": "rgb(55, 34, 186)",
        "default-blue": "rgb(0, 181, 224)",
        "default-hover-blue": "rgb(0, 133, 172)",
        "default-hover-gray": "rgb(232, 232, 232)",
      }
    },
  },
  plugins: [],
};
