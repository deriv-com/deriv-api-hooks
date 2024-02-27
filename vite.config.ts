import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
    plugins: [
        mkcert(),
        react(),
        viteTsconfigPaths(),
        dts({
            rollupTypes: true,
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "@deriv-com/api-hooks",
            fileName: "deriv-api-hooks",
        },
    },
    server: {
        port: 8443,
    },
});
