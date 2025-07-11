import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import image from '@astrojs/image';
import compression from 'vite-plugin-compression';
import astroCompress from 'astro-compress'; // <-- add this import

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      compression({ algorithm: 'gzip' }),
      compression({ algorithm: 'brotliCompress' }),
 
    ],
    build: {
      minify: 'terser', // ✅ Proper way to use Terser with Vite
    },
  },
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    image(),
    astroCompress({ brotli: true, gzip: true }) // <-- use the imported function
  ],
});