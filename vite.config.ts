import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [
            react(),
            eslint({ exclude: ['**/virtual:/**', '**/node_modules/**'] }),
            TanStackRouterVite(),
            visualizer({
                filename: './tmp/bundle-visualizer.html',
            }),
        ],
        base: env.VITE_BASE_PUBLIC_PATH,
        build: {
            target: ['es2021', 'edge91', 'firefox90', 'chrome91', 'opera77', 'safari15', 'ios15'],
            chunkSizeWarningLimit: 1000,
        },
        test: {
            environment: 'jsdom',
        },
        resolve: {
            alias: [{ find: '@', replacement: '/src' }],
        },
        server: {
            port: 3000,
        },
        preview: {
            port: 4173,
        },
    };
});
