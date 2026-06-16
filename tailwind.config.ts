import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        /** Светло-серый/белый фон для ощущения легкости */
        cloud: {
          DEFAULT: "#ffffff",
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
        },
        /** Глубокий графитовый текст */
        graphite: {
          DEFAULT: "#18181b",
          light: "#3f3f46",
          lighter: "#71717a",
        },
        /** Электрический синий/пурпурный для акцентов и Call to Action */
        electric: {
          DEFAULT: "#2563eb",
          light: "#3b82f6",
          glow: "#60a5fa",
          purple: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 8px 32px 0 rgba(37, 99, 235, 0.15)',
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "blur-reveal": "blurReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blurReveal: {
          "0%": { opacity: "0", filter: "blur(12px)", transform: "translateY(20px)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      transitionDuration: {
        DEFAULT: "400ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
