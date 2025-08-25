/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // recommended instead of false
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: "#000000",   // black
        foreground: "#ffffff",   // white text
        primary: {
          DEFAULT: "#000000",    // main theme (black)
          foreground: "#ffffff"  // white text on black
        },
        secondary: {
          DEFAULT: "#1e3a8a",    // navy blue
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#2563eb",    // brighter blue accent
          foreground: "#ffffff"
        },
        neon: {
          DEFAULT: "#00f0ff",    // your vibrant neon cyan
          foreground: "#000000"  // black text on neon
        },
        muted: {
          DEFAULT: "#111111",
          foreground: "#aaaaaa"
        },
        border: "#333333",
        input: "#222222",
        ring: "#1e3a8a",         // navy highlight
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
