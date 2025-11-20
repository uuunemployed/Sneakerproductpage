import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// 👇 ДОДАЙТЕ ЦЕЙ РЯДОК
const REPO_NAME = "Sneakerproductpage";

export default defineConfig({
  // 👇 ДОДАЙТЕ ЦЮ ВЛАСТИВІСТЬ
  base: `/${REPO_NAME}/`,

  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    // ... решта вашого alias
  },
  build: {
    target: "esnext",
    outDir: "build",
  },
  server: {
    port: 3000,
    open: true,
  },
});
