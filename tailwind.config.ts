import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /** Светлый фон */
        surface: {
          DEFAULT: "#f8f9fa",
          50: "#ffffff",
          100: "#f1f3f5",
        },
        /** Темный текст */
        ink: {
          DEFAULT: "#111111",
          light: "#333333",
        },
        /** Акцентный сочный цвет (сочный коралл/красно-оранжевый) */
        coral: {
          DEFAULT: "#FF4D4D",
          hover: "#FF2A2A",
          glow: "rgba(255, 77, 77, 0.4)",
        },
        /** Дополнительный акцент (неоновый циан) */
        cyan: {
          DEFAULT: "#00E5FF",
          glow: "rgba(0, 229, 255, 0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(17, 17, 17, 0.05)',
        'glass-hover': '0 8px 32px 0 rgba(255, 77, 77, 0.15)',
        'neon-coral': '0 0 20px 0 rgba(255, 77, 77, 0.5)',
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
  plugins: [
    require('tailwindcss/plugin')(function({ addVariant }: any) {
      addVariant('group-hover', ['.group:hover &', '.group.mobile-hover-card[data-mobile-hover="true"] &']);
      addVariant('hover', ['&:hover', '&[data-mobile-hover="true"]']);
    }),
  ],
};

export default config;
