module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  page: {
    index: {
      entry: 'src/main.ts',
      template: 'src/App.vue',
      filename: 'index.html',
      title: 'Index Page'
    }
  },
  css: {
    extract: process.env.NODE_ENV === 'production'
  },
  lintOnSave: false,
  devServer: {
    https: false,
    hotOnly: true,
    proxy: null
  }
}