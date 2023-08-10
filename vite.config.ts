import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { defineConfig, UserConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import svgr from 'vite-plugin-svgr';

export const port = 5173;

export default defineConfig(
  (configEnv): UserConfig => ({
    base: '/',
    publicDir: './public',
    build: {
      outDir: './build',
    },
    server: {
      port,
      strictPort: true,
    },
    plugins: [
      react(),
      basicSsl(),
      chunkSplitPlugin({
        strategy: 'all-in-one',
        customSplitting: {
          app: [/src\//],
          vendors: [/node_modules\//],
        },
      }),
      svgr(),
    ],
    css: {
      modules: {
        generateScopedName:
          configEnv.mode === 'development'
            ? '[local]-[hash:base64:5]'
            : '[hash:base64:5]',
      },
    },
    resolve: {
      alias: {
        '~/': `${__dirname}/src/`,
      },
    },
  })
);
