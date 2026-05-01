/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chip: {
          bg: '#0a0e1a',
          panel: '#0f1629',
          border: '#1e2d4a',
          accent: '#00d4ff',
          green: '#00ff88',
          red: '#ff3366',
          yellow: '#ffcc00',
          purple: '#9b59ff',
          orange: '#ff8c00'
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff' },
          '100%': { boxShadow: '0 0 20px #00d4ff, 0 0 40px #00d4ff, 0 0 60px #00d4ff' }
        }
      }
    }
  },
  plugins: []
}
