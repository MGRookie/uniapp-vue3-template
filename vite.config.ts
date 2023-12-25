import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const VITE_HTTP_BASEURL = loadEnv(mode, process.cwd()).VITE_HTTP_BASEURL
  return {
    plugins: [uni(), UnoCSS()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      open: true,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: VITE_HTTP_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
