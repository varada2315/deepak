import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 5467,
    host: '0.0.0.0',
    allowedHosts: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        projects: resolve(__dirname, 'projects.html'),
        interior_design: resolve(__dirname, 'interior-design.html'),
        renovation_remodeling: resolve(__dirname, 'renovation-remodeling.html'),
        commercial_spaces: resolve(__dirname, 'commercial-spaces.html'),
        project_loft: resolve(__dirname, 'project_loft.html'),
        project_atelier: resolve(__dirname, 'project_atelier.html'),
        project_luma: resolve(__dirname, 'project_luma.html'),
        project_nordic: resolve(__dirname, 'project_nordic.html')
      }
    }
  }
});
