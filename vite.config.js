import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    // Alloy proxies the preview through a generated *.modal.host domain,
    // so Vite's Host header check must accept it.
    allowedHosts: true,
  },
});
