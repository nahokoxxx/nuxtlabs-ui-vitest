/// <reference types="vitest" />

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue'],
      dts: false,
    }),
    Components({
      resolvers: [
        (name: string) => {
          if (name.match(/^U[A-Z]/)) {
            return { name: name.replace(/^U/, ''), from: '@nuxthq/ui/dist/runtime/components' };
          }
        },
      ],
      deep: true,
      include: [/\.vue$/],
      dts: false,
    }),
  ]
});
