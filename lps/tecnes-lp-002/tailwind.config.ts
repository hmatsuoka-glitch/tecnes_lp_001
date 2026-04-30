import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0d1b2a",
        navy: "#0a1f44",
        brand: "#1a3a8f",
        sky: "#3563e9",
        accent: "#3563e9",
        cream: "#f4efe6",
        soft: "#eef1f7",
        line: "#e6e8ec",
        muted: "#6b7280",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
