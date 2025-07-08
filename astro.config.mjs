import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import image from '@astrojs/image';
import node from '@astrojs/node';
import compression from 'vite-plugin-compression';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      compression({ algorithm: 'gzip' }),          // ✅ Enable gzip
      compression({ algorithm: 'brotliCompress' }) // ✅ Enable Brotli
    ],
  },
  integrations: [image()],
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});
