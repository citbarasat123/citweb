import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: "var(--font-noto)",
        nunito: "var(--font-nunito)",
      },

      backgroundImage: {
        "bg-gra-deep":
          "linear-gradient(35deg, #000C7C 0%, #0011AC 65%, #D653B1 100%)",

        "gra-dark":
          "linear-gradient(35deg, #04071C 0%, #0011AC 33%, #1116AC 67%, #D653B1 100%)",

        "bg-gra-light":
          "linear-gradient(35deg, rgba(51, 67, 210, 0.76) 0%, rgba(0, 17, 172, 1) 65%, rgba(214, 83, 177, 1) 100%)",

        "l-white":
          "linear-gradient(to right, rgba(74, 91, 241, 0.15) 0%, rgba(255, 255, 255, 1) 100%)",
        "l-pink":
          "linear-gradient(to right, rgba(255, 136, 221, 1) 3%, rgba(255, 136, 221, 0.24) 100%)",
        "l-blue":
          "linear-gradient(to right, rgba(74, 91, 241, 0.15) 0%, rgba(255, 255, 255, 1) 100%)",
      },
      colors: {
        "menu-font-color": "rgba(155, 163, 235, 1)",
        "top-font-color": "rgba(155, 163, 235, 1)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
