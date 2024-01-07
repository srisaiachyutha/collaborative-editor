import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base:"/collaborative-editor/",
  //base: "./",
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  host: true, // needed for the Docker Container port mapping to work
  strictPort: true,
  port: 3000,
})