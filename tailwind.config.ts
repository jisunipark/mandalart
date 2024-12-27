import type { Config } from "tailwindcss";
import { KeyValuePair } from "tailwindcss/types/config";

const px0_10: KeyValuePair<string, string> = Object.fromEntries(
  Array.from({ length: 11 }, (_, i) => [i.toString(), `${i}px`]),
);
const px0_100: KeyValuePair<string, string> = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [i.toString(), `${i}px`]),
);
const px0_200: KeyValuePair<string, string> = Object.fromEntries(
  Array.from({ length: 201 }, (_, i) => [i.toString(), `${i}px`]),
);

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3179B7",
        gray: {
          100: "#F7F7F7",
          200: "DDD",
          300: "#D9D9D9",
          400: "#CBCBCB",
        },
      },
      fontFamily: {
        sen: ["var(--font-sen)"],
        pre: ["var(--font-pretendard)"],
      },
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
      inset: px0_100,
      gap: px0_100,
    },
  },
  plugins: [],
} satisfies Config;
