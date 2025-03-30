module.exports = {
  darkMode: "class", // Habilita el modo oscuro basado en la clase "dark"
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir todos los archivos relevantes
  ],
  theme: {
    extend: {
      screens: {
       /*  sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px", */

        'custom': '1190px', // Define el punto de interrupción a 1190px
      },
    },
  },
  plugins: [],
};
