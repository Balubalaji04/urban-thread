import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'

/** Avoid esbuild hard-failing on truncated/corrupt three-stdlib .map files (common on Windows installs). */
function stripThreeStdlibSourcemaps() {
  return {
    name: 'strip-three-stdlib-sourcemaps',
    setup(build) {
      build.onLoad({ filter: /three-stdlib[\\/].*\.js$/ }, async (args) => {
        const source = await fs.promises.readFile(args.path, 'utf8')
        if (!source.includes('sourceMappingURL')) return null
        return {
          contents: source.replace(/\/\/[#@]\s*sourceMappingURL\s*=\s*\S+/g, ''),
          loader: 'js',
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [stripThreeStdlibSourcemaps()],
    },
  },
})
