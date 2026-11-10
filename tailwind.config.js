/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink: '#111111', paper: '#F5F5F4', rose: '#E11D48' },
    fontFamily: { display: ['Bebas Neue', 'sans-serif'], sans: ['Inter', 'sans-serif'] }
  }},
  plugins: []
}
