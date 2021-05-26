import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import vitePluginImp from "vite-plugin-imp" //按需引入库
import path from 'path';
export default defineConfig({
  plugins: [
      vue(),
      vitePluginImp({
        libList: [
          {
            libName: 'vant',
            style(name: string){
              if (/CompWithoutStyleFile/i.test(name)) {
                // This will not import any style file
                return false
              }
              return `vant/es/${name}/index.css`
            }
          }
        ]
      })
  ],
  base:'./',//打包路径
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port:5000,//启动端口
    open: true,
    proxy: {
    },
    cors:true
  }
})
