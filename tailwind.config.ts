import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#FAF8F3",
        ink: "#1C1712",
        muted: "#6B6257",
        gold: {
          300: "#FDE68A",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(217,119,6,0.10), transparent 70%)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 60%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(245,158,11,0)" },
          "50%": { boxShadow: "0 0 22px 6px rgba(245,158,11,0.18)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
