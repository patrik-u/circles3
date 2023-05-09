import { defineConfig, Plugin } from "vite";
import solidPlugin from "vite-plugin-solid";

const moduleExclude = (match: string): Plugin => {
    const m = (id: string) => id.indexOf(match) > -1;
    return {
        name: `exclude-${match}`,
        resolveId(id: string) {
            if (m(id)) return id;
        },
        load(id: string) {
            if (m(id)) return `export default {}`;
        },
    };
};

export default defineConfig({
    plugins: [solidPlugin(), moduleExclude("text-encoding")],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
    },
    optimizeDeps: {
        include: [
            "gun",
            "gun/gun",
            "gun/sea",
            "gun/sea.js",
            "gun/lib/then",
            "gun/lib/webrtc",
            "gun/lib/radix",
            "gun/lib/radisk",
            "gun/lib/store",
            "gun/lib/rindexed",
        ],
    },
    base: "/circles3",
});
