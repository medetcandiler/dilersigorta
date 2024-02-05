import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "screen-80": "calc(100vh - 80px)",
      },
      colors: {
        transparentSky: "rgba(11, 165, 233, 0.3)"
      }
    },
  },
  plugins: [],
};
export default config;
