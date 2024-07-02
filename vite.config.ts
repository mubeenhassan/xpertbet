import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	envDir: './env',
	plugins: [react(), tsconfigPaths(), svgrPlugin()],
	/* If proxy is needed
  server: {
    proxy: {
      "/api": "localhost:8080"
    }
  },
  */
	build: {
		sourcemap: true
	}
})
