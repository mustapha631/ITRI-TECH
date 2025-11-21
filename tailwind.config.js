module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Safety Authority
        primary: {
          DEFAULT: "#2d5016", // Deep forest authority
          50: "#f0f4ed", // primary-50
          100: "#dce8d1", // primary-100
          200: "#b9d1a3", // primary-200
          300: "#96ba75", // primary-300
          400: "#73a347", // primary-400
          500: "#2d5016", // primary-500
          600: "#244015", // primary-600
          700: "#1b3010", // primary-700
          800: "#12200b", // primary-800
          900: "#091006", // primary-900
        },
        // Secondary Colors - Growth Green
        secondary: {
          DEFAULT: "#66a83e", // Growth green
          50: "#f2f8ed", // secondary-50
          100: "#e5f1db", // secondary-100
          200: "#cbe3b7", // secondary-200
          300: "#b1d593", // secondary-300
          400: "#97c76f", // secondary-400
          500: "#66a83e", // secondary-500
          600: "#528632", // secondary-600
          700: "#3e6426", // secondary-700
          800: "#2a421a", // secondary-800
          900: "#16210e", // secondary-900
        },
        // Accent Colors - Safety Orange
        accent: {
          DEFAULT: "#ff6b35", // Safety orange
          50: "#fff5f2", // accent-50
          100: "#ffebe5", // accent-100
          200: "#ffd7cc", // accent-200
          300: "#ffc3b2", // accent-300
          400: "#ffaf99", // accent-400
          500: "#ff6b35", // accent-500
          600: "#cc562a", // accent-600
          700: "#99401f", // accent-700
          800: "#662b15", // accent-800
          900: "#33150a", // accent-900
        },
        // Background Colors
        background: "#fafafa", // Clean canvas
        surface: "#ffffff", // Pure showcase backgrounds
        // Text Colors
        text: {
          primary: "#1a1a1a", // Extended reading
          secondary: "#666666", // Information hierarchy
        },
        // Status Colors
        success: "#22c55e", // Purchase confirmation - green-500
        warning: "#f59e0b", // Stock alerts - amber-500
        error: "#ef4444", // Form validation - red-500
        // Border Colors
        border: {
          DEFAULT: "#e5e5e5", // Clean borders - gray-200
          light: "#f0f0f0", // border-light - gray-100
          dark: "#d1d1d1", // border-dark - gray-300
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        technical: ['JetBrains Mono', 'monospace'],
        mono: ['JetBrains Mono', 'monospace'],
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
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.1)', // Interactive elements
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)', // Product cards
        'hover': '0 6px 16px rgba(0, 0, 0, 0.12)', // Hover states
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      transitionDuration: {
        '300': '300ms', // Fast transitions
        '400': '400ms', // Premium transitions
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}