import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        secondary: "#F9F7F2",
        accent: "#C5A065",
        background: "#F9F7F2",
        surface: "#FFFFFF",
        text: "#222222",
        muted: "#888888",
      },
      spacing: {
        section: "5rem",
        card: "1.5rem",
        container: "2rem",
        mobile: "1rem",
      },
      borderRadius: {
        md: "4px",
        full: "9999px",
      },
      transitionTimingFunction: {
        smooth: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        subtle: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;