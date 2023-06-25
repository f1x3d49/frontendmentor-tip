/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        scyan: "hsl(172, 67%, 45%)",
        vdcyan: "hsl(183, 100%, 15%)",
        dgcyan: "hsl(186, 14%, 43%)",
        gcyan: "hsl(184, 14%, 56%)",
        lgcyan: "hsl(185, 41%, 84%)",
        vlgcyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        spacemono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
