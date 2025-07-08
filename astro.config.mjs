import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import image from '@astrojs/image';
import compression from 'vite-plugin-compression';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      compression({ algorithm: 'gzip' }),
      compression({ algorithm: 'brotliCompress' })
    ],
  },
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [image()],
});
