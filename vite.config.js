import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// 引入⬇️
import postCssPxToRem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'

const pathResolve = (dir) => {
  return resolve(__dirname, ".", dir)
}

const alias = {
  '@': pathResolve("src")
}


// https://vitejs.dev/config/
/*
export default defineConfig({
  plugins: [vue()],
})
*/

export default ({ command }) => {
  const prodMock = true;
  return {
    base: './',
    resolve: {
      alias
    },
    server: {
      port: 3004,
      host: '0.0.0.0',
      open: true,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
          }
        }
      }
    },
    plugins: [
      vue(),
    ],
    css: {
      postcss: { // ⚠️关键代码
        plugins: [
          postCssPxToRem({ // 自适应，px>rem转换
            rootValue: 16, // 1rem的大小
            propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
          }),
          autoprefixer({ // 自动添加前缀
            overrideBrowserslist: [
              "Android 4.1",
              "iOS 7.1",
              "Chrome > 31",
              "ff > 31",
              "ie >= 8"
              //'last 2 versions', // 所有主流浏览器最近2个版本
            ],
            grid: true
          })
        ]
      },
    }
  };
}