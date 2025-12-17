import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8082,
  },
  plugins: [
    react(),
    federation({
      name: 'viteChild', // Must match the remote name in the host
      filename: 'remoteEntry.js',
      exposes: {
        './ViteButton': './src/ViteButton.tsx', // Expose components/modules from the child
      },
      shared: ['react', 'react-dom'], // Share common dependencies
    }),
  ],
});
