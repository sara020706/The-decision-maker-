/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        },
        sunset: {
          400: '#fb7185',
          500: '#ff5a7a',
          600: '#ff3b6b'
        },
        accent: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669'
        }
      },
      backgroundImage: {
        'rainbow': 'linear-gradient(135deg, #7c3aed 0%, #ff5a7a 35%, #f59e0b 100%)'
      }
    },
  },
  plugins: [],
};
