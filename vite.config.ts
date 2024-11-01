import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    reactRouter({
      ssr: false,
      prerender({ getStaticPaths }) {
        console.log(getStaticPaths());
        return [...getStaticPaths()];
      },
    }),
    tsconfigPaths(),
  ],
});
