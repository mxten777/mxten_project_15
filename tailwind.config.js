/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Geist Sans', 'Space Grotesk', 'Sora', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Space Grotesk', 'Montserrat', 'Sora', 'Poppins', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'Montserrat', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'Geist Sans', 'Manrope', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-x': 'bounceX 1s infinite',
        'loading-bar': 'loadingBar 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-10px)' },
          '60%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bounceX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25px)' },
        },
        loadingBar: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        neon: {
          blue: '#00f5ff',
          purple: '#bf00ff',
          pink: '#ff1493',
          green: '#39ff14',
          yellow: '#ffff00',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.1)',
          black: 'rgba(0, 0, 0, 0.1)',
        },
        presentation: {
          bg: '#0f172a',
          card: '#1e293b',
          light: '#f8fafc',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-presentation': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-text': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'text-rainbow': 'linear-gradient(90deg, #ff0080, #ff8c00, #40e0d0, #ff0080)',
        
        // Modern Gradients
        'gradient-sunset': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-fire': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-nature': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-space': 'linear-gradient(135deg, #667db6 0%, #0082c8 25%, #0082c8 50%, #667db6 100%)',
        
        // Neon Gradients
        'gradient-neon-blue': 'linear-gradient(135deg, #00f5ff 0%, #0080ff 100%)',
        'gradient-neon-purple': 'linear-gradient(135deg, #bf00ff 0%, #8000ff 100%)',
        'gradient-neon-pink': 'linear-gradient(135deg, #ff1493 0%, #ff69b4 100%)',
        
        // Dark Mode Gradients
        'gradient-dark': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)',
        'gradient-dark-blue': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        
        // Glass Morphism
        'gradient-glass-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-glass-dark': 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
      },
      textColor: {
        'gradient-primary': 'transparent',
      },
      // Bento Grid Classes for responsive design
      gridTemplateAreas: {
        'bento-mobile': '"large large" "medium small"',
        'bento-desktop': '"large medium small"'
      },
      // Mobile Touch Optimization
      minHeight: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bento-large': {
          '@apply col-span-2 row-span-2 md:col-span-1 md:row-span-2': {},
        },
        '.bento-medium': {
          '@apply col-span-1 row-span-1 md:col-span-1 md:row-span-1': {},
        },
        '.bento-small': {
          '@apply col-span-1 row-span-1': {},
        },
        '.bento-grid': {
          '@apply grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6': {},
        },
        '.touch-manipulation': {
          'touch-action': 'manipulation',
        },
        '.tap-highlight-none': {
          '-webkit-tap-highlight-color': 'transparent',
        },
        '.safe-area-inset': {
          'padding-top': 'env(safe-area-inset-top)',
          'padding-right': 'env(safe-area-inset-right)',
          'padding-bottom': 'env(safe-area-inset-bottom)',
          'padding-left': 'env(safe-area-inset-left)',
        }
      })
    }
  ],
}