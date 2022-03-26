module.exports = {
  pwa: {
    name: 'Klementino',
  },
  pluginOptions: {
    svgSprite: {
      dir: 'public/assets/icons',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        extract: true,
        spriteFilename: 'img/icons.[hash:8].svg', // or 'img/icons.svg' if filenameHashing == false
      },
      pluginOptions: {
        plainSprite: true,
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rule('svg-sprite').use('svgo-loader').loader('svgo-loader')
  },
}
