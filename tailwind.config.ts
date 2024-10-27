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
        background: "#000000", // Custom background color
        foreground: "var(--foreground)",
        black: '#000000', // Optional black color if you want a black alias
      },
      backgroundColor: {
        background: "#000000", // Use background as a class name if desired
      },
    },
  },
  plugins: [],
};

export default config;
