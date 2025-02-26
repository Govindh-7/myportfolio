import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures proper asset resolution in production
  assetsInclude: ["**/*.mp3", "**/*.mp4"], // ✅ Tells Vite to process MP3/MP4 files correctly
  server: {
    watch: {
      usePolling: true, // Helps with file changes in some environments
    },
  },
});
