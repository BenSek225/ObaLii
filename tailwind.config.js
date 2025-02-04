/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
        background: '#F5F5F5',
        text: '#1F2937',
      },
    },
  },
  plugins: [],
}