module.exports = {
  pluginOptions: {
    express: {
      port:process.env.PORT || 4000,
      shouldServeApp: true,
      serverDir: './server'
    },
    moment: {
      locales: [
        'fr'
      ]
    }
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true,
     // clientsClaim: true,
      globDirectory: "/",
      globPatterns: ["**/*.{css,jpeg,jpg,ico,html,png,js,json,woff2,graphql}"],
    
    
    }
  }
}
