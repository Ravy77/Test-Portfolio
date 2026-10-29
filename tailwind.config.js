/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050912', // Near-black background
          900: '#080E1E',
          850: '#0C152B',
          800: '#111D3B',
          700: '#19284F',
          border: '#1A2748',
          borderGlow: '#243A6B',
        },
        primary: {
          DEFAULT: '#2F9BFF', // Electric blue
          hover: '#1E87EC',
          light: '#59AFFF',
          dark: '#0C70D4',
        },
        cyanAccent: {
          DEFAULT: '#63D8FF', // Cyan secondary
          hover: '#45C8F2',
          light: '#8DE2FF',
          dark: '#26B2E0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(47, 155, 255, 0.2)',
        'glow': '0 0 25px rgba(47, 155, 255, 0.25)',
        'glow-lg': '0 0 45px rgba(47, 155, 255, 0.35)',
        'glow-cyan': '0 0 25px rgba(99, 216, 255, 0.25)',
        'card-dark': '0 4px 20px -2px rgba(5, 9, 18, 0.7), 0 2px 6px -1px rgba(47, 155, 255, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'reverse-spin': 'reverse-spin 25s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}
