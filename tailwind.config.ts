import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF014F",
          foreground: "#FFFFFF",
        },
        surface: {
          DEFAULT: "#212121",
          elevated: "#1E1E1E",
          muted: "#2A2A2A",
        },
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#C4C4C4",
          dim: "#878787",
        },
        canvas: "#0F0F0F",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-lines":
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px)",
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0,0,0,0.6)",
        glow: "0 0 40px rgba(255, 1, 79, 0.25)",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(36px) scale(0.92)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 4s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        "hero-in": "hero-in 1s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
