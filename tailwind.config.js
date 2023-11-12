/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#fff',
      'black': '#000',
      'primary': '#7A52B3',
      'secondary': '#00B7BF',
      'purple': '#8461EE',
      'accent': '#5829E5',
      'dark': '#1F1F21',
      'light': '#F6F8FB',
      'gray': '#DADBDD',
      'blue': '#4299E1',
      'orange': '#F56565',
      'transparent': 'transparent',

    },
  },
  plugins: [],
};
