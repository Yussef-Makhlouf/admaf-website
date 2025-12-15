import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "white",
        foreground: "#b41d38",
        primary: {
          DEFAULT: "#b41d38",
          foreground: "white",
        },
        secondary: {
          DEFAULT: "white",
          foreground: "#b41d38",
        },
        destructive: {
          DEFAULT: "#b41d38",
          foreground: "white",
        },
        muted: {
          DEFAULT: "#f8f8f8",
          foreground: "#b41d38",
        },
        accent: {
          DEFAULT: "#b41d38",
          foreground: "white",
        },
        popover: {
          DEFAULT: "white",
          foreground: "#b41d38",
        },
        card: {
          DEFAULT: "white",
          foreground: "#b41d38",
        },
        admaf: {
          red: "#b41d38", // The ONLY primary color
          white: "#ffffff", // The ONLY secondary color
          black: "#1a1a1a", // Strict neutral for heavy text if needed
          gray: "#f5f5f5", // Subtle backgrounds
        },
      },
      borderRadius: {
        lg: "0",    // Sharp edges for more premium/institutional feel
        md: "0",
        sm: "0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        arabic: ["var(--font-noto-naskh)", "serif"],
        display: ["var(--font-amiri)", "serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" }, // Reduced movement
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }, // Subtle ease
        },
        "draw": {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1s ease-out forwards",
        "float": "float 8s ease-in-out infinite", // Slower
        "draw": "draw 3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
