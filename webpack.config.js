const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    // 'whatwg-fetch',
    main: './src/index.js', 
    sw: './src/sw.js',
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:8].js',
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico"
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js',
    })
  ],
  devtool: "hidden-source-map",
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3001',
      '/albums': 'http://localhost:3001',
      '/songs': 'http://localhost:3001',
      '/images': 'http://localhost:3001',
      '/music': 'http://localhost:3001'
    }
  },
  optimization: {
    usedExports: true,
    sideEffects: true,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: 'vendor',
          name: 'vendor',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  }
}