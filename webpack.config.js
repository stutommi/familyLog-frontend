const path = require('path')
const webpack = require('webpack')

const config = (env, argv) => {

  const backend_url = argv.mode === 'production'
    ? 'real address'
    : 'http://localhost:3001'

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js'
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'build'),
      compress: true,
      port: 3000
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