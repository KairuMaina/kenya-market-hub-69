
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['react', 'react-dom']
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-toast',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-label',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-switch',
      '@radix-ui/react-slider',
      '@radix-ui/react-progress',
      '@radix-ui/react-separator',
      '@radix-ui/react-badge',
      '@radix-ui/react-button'
    ],
    exclude: []
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          radix: [
            '@radix-ui/react-tooltip',
            '@radix-ui/react-toast',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu'
          ]
        }
      }
    }
  }
}));
