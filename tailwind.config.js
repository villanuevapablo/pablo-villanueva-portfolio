/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F3F0E9',
          alt: '#EAE6DC',
        },
        ink: {
          DEFAULT: '#171918',
          secondary: '#3D403E',
          muted: '#5D605C',
        },
        terracotta: {
          DEFAULT: '#D97745',
          dark: '#B85D30',
        },
        'muted-blue': {
          DEFAULT: '#526B9B',
          dark: '#3C517A',
        },
        stone: {
          DEFAULT: '#B9B7AF',
        },
      },
      fontFamily: {
        sans: [
          'Manrope',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        serif: [
          '"DM Serif Display"',
          'Georgia',
          'Cambria',
          'serif',
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
