const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/_vendor.scss";`
      }
    }
  },
  devServer: {
    port: 3000
  }
})
