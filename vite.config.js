import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/johan-lopez-torres",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }

});
