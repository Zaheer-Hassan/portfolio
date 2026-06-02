import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0F",
        card: "#0F0F1A",
        border: "#1E1E3A",
        primary: "#6366F1",
        secondary: "#8B5CF6",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [],
};
export default config;
