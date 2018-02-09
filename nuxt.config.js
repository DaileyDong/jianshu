module.exports = {
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: '简书 - 创作你的创作',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '简书' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css','~/assets/css/normalize.css','~/assets/css/font-awesome.css','swiper/dist/css/swiper.css'],
  /*
  ** Add axios globally
  */
  // 告诉打包工具 axios只打包一次
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
