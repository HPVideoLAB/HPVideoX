const { defineConfig } = require('@vue/cli-service')

const isProd = process.env.NODE_ENV === 'production'

module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: true,

  // Disable source maps in production to hide source code and speed up builds.
  productionSourceMap: false,

  // Strip console.* and debugger from production bundles via Terser.
  chainWebpack: (config) => {
    if (isProd) {
      config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions = args[0].terserOptions || {}
        args[0].terserOptions.compress = {
          ...(args[0].terserOptions.compress || {}),
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug'],
        }
        return args
      })
    }
  },
})
