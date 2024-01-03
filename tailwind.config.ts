import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        // screens: { md: { max: "1050px" }, sm: { max: "550px" } },
        extend: {
            colors: {
                gray: {
                  50: "#f6f7fb",
                  500: "#9f9f9f",
                  800: "#393d46",
                  "500_87": "#9f9f9f87",
                },
                bluegray: { 100: "#cdcfd1", "100_87": "#cdcfd187" },
                black: {
                  "900_0c": "#0000000c",
                  "900_19": "#00000019",
                  "900_68": "#00000068",
                  "900_26": "#00000026",
                },
                white: { A700_82: "#ffffff82", A700: "#ffffff" },
                yellow: { 400: "#fae952" },
              },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
                urbanist: ["Urbanist", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
