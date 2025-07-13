import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()], // একটি plugins অ্যারেতে দুটি প্লাগিন একসাথে
  base: '/', // রুট ডোমেইনের জন্য; সাবডিরেক্টরির জন্য '/subpath/' ব্যবহার করুন
  build: {
    outDir: "dist", // Netlify-র জন্য ডিফল্ট আউটপুট ডিরেক্টরি
  },
});