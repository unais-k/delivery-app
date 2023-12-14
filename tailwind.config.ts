import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        screens: { md: { max: "1050px" }, sm: { max: "550px" } },
        extend: {
            colors: {
                gray: {
                    50: "#fff9f5",
                    51: "#fff9f6",
                    52: "#f9fdff",
                    300: "#dbdbdb",
                    400: "#c4c4c4",
                    401: "#c0c0c0",
                    600: "#6e6e6e",
                    604: "#787878",
                    700: "#626262",
                    900: "#191919",
                    "900_cc": "#191919cc",
                },
            },
            fontFamily: { manrope: "Manrope", markoone: "Marko One" },
            boxShadow: { bs: "0px 30px 30px 0px #91aebb33" },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};

export default config;
