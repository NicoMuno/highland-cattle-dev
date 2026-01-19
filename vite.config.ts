import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // only set the GitHub Pages base for production build
  base: command === "build" ? "/highland-cattle/" : "/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
}));
