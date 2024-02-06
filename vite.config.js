import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/suzi_google_maps/",
  server: {
    hmr:
      process.env.CODESANDBOX_SSE || process.env.GITPOD_WORKSPACE_ID
        ? 443
        : undefined,
  },
});
