import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: 'https://joblink-backend-2.onrender.com', // Access via `import.meta.env`

        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Removes /api prefix
      },
    },
  },
});


