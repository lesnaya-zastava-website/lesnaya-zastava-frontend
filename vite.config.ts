import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
      "@app": path.join(__dirname, "src/app"),
      "@styles": path.join(__dirname, "src/styles"),
      "@pages": path.join(__dirname, "src/pages"),
      "@widgets": path.join(__dirname, "src/widgets"),
      "@shared": path.join(__dirname, "src/shared"),
      "@store": path.join(__dirname, "src/store"),
      "@api": path.join(__dirname, "src/api"),
    },
  },
});
