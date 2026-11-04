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
        background: {
          DEFAULT: '#080B14',
          secondary: '#0D1220',
          card: '#111827',
          elevated: '#172033',
        },
        accent: {
          primary: '#3B82F6',
          secondary: '#06B6D4',
          hover: '#2563EB',
          glow: 'rgba(59, 130, 246, 0.25)',
        },
        textColor: {
          main: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        },
        border: {
          subtle: 'rgba(148, 163, 184, 0.15)',
          glow: 'rgba(59, 130, 246, 0.35)',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.08) 35%, transparent 70%)',
        'grid-pattern': 'linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
