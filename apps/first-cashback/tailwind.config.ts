import type { Config } from "tailwindcss";
import {
  blue as primary,
  gray,
  black,
  transparent,
  white,
} from "tailwindcss/colors";
import headless from "@headlessui/tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Pretendard", "-apple-system", "sans-serif"],
      "toss-face": [
        "var(--font-toss-face)",
        "Pretendard",
        "-apple-system",
        "sans-serif",
      ],
    },
    screens: {
      tablet: "640px",
    },
    colors: {
      white,
      black,
      gray,
      transparent,
      primary,
    },
  },
  plugins: [headless({ prefix: "ui" })],
};
export default config;
