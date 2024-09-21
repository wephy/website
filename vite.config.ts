import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import glsl from 'vite-plugin-glsl';
import { templateCompilerOptions } from '@tresjs/core'
import AutoImport from 'unplugin-auto-import/vite';


export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        'vue', 
        {
          'three': [ // Auto-import specific Three.js modules or classes
            'Scene',
            'PerspectiveCamera',
            'WebGLRenderer',
            'BoxGeometry',
            'MeshBasicMaterial',
            'Mesh',
            // Add other classes or functions you want to auto-import
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts', // Generates TypeScript declaration file for auto-imported APIs
    }),
    glsl(),
    vue({
      // Other config
      ...templateCompilerOptions
    }),
  ],
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
