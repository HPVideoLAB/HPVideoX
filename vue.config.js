const { defineConfig } = require('@vue/cli-service')

const isProd = process.env.NODE_ENV === 'production'

// Optional: lossless image compression at build time.
// Enabled only when `image-minimizer-webpack-plugin` is installed locally.
// Skipping gracefully means production builds still work even if the
// native image tooling (sharp/mozjpeg/pngquant) isn't available on the
// build host.
let ImageMinimizerPlugin = null
try {
  ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
} catch (_) {
  /* plugin not installed; skip */
}

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

  configureWebpack: (config) => {
    if (isProd && ImageMinimizerPlugin) {
      config.optimization = config.optimization || {}
      config.optimization.minimizer = config.optimization.minimizer || []
      config.optimization.minimizer.push(
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
              encodeOptions: {
                jpeg: { quality: 80 },
                png: { compressionLevel: 9, palette: true },
                webp: { quality: 80 },
              },
            },
          },
        })
      )
    }
  },
})
