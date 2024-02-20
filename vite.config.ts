import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [react(), viteTsconfigPaths(), dts({ rollupTypes: true })],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "@deriv-com/api-hooks",
            fileName: "deriv-api-hooks",
        },
    },
});
