const path = require('path')
const webpack = require('webpack')

const config = (env, argv) => {

  const backend_url = argv.mode === 'production'
    ? 'real address'
    : 'http://localhost:3003'

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
      publicPath: '/'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000,
      historyApiFallback: true,
      proxy: {
        '/api/**': {
          target: backend_url,
          secure: false,
          changeOrigin: true
        }
      }
    },
    devtool: "source-map",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    }
  }
}

module.exports = config 