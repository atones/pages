import type { Config } from "tailwindcss";
import { gray, black, transparent, white } from "tailwindcss/colors";
import headless from "@headlessui/tailwindcss";

const orange = {
  s5: "#ff7720",
  s4: "#ff8d4e",
  s3: "#ffcbae",
  s2: "#ffe0cb",
  s1: "#ffe7d7",
} as const;

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
      primary: orange,
    },
  },
  plugins: [headless({ prefix: "ui" })],
};
export default config;
