/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E88E5',
        secondary: '#1565C0',
        background: '#F5F5F5',
        text: '#212121',
        accent: '#FFB74D'
      }
    },
    fontFamily:{
      'lato': ['lato', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'roboto': ['Roboto Condensed', 'sans-serif']
    },
    screens: {    
      'galaxyfold': '280px', 
      'phone': '360px', 
      'middle': '480px',   
      'sm':'640px',
      'md': '768px',
      'lg': '1024px', 
      'xl':'1280px',  
      '2xl':'1536px'
    },
  },
  plugins: [],
}