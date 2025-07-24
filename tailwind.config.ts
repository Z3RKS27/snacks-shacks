
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f87171", // rojo claro
        secondary: "#facc15", // amarillo
      },
    },
  },
  plugins: [],
};

export default config;
