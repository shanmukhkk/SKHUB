/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4D6D',
          hover: '#FF758F',
        },
        secondary: {
          DEFAULT: '#7209B7',
          hover: '#8A2BE2',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1E1E1E',
          card: '#242424',
          border: '#333333',
        },
        light: {
          DEFAULT: '#F8F9FA',
          muted: '#E9ECEF',
        },
        accent: {
          blue: '#4CC9F0',
          purple: '#7209B7',
          pink: '#F72585',
          yellow: '#FFCA28',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.DEFAULT), 0 0 20px theme(colors.primary.DEFAULT)',
        'neon-purple': '0 0 5px theme(colors.secondary.DEFAULT), 0 0 20px theme(colors.secondary.DEFAULT)',
        'neon-blue': '0 0 5px theme(colors.accent.blue), 0 0 20px theme(colors.accent.blue)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};