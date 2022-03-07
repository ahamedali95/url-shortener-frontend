const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const sass = require("sass");
const Webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const devConfig = {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: sass
            }
          }
        ]
      }
    ]
  },
  devServer: {
    client: {
      progress: true,
      overlay: true,
    },
    hot: true,
    port: 3000,
    proxy: {
      '/api': 'http://[::1]:8080',
      '/api/**': 'http://localhost:8080/'
    },
    historyApiFallback: true,
    // compress: true
  },
  plugins: [
    //BundleAnalyzerPlugin - used to analyze final webpack bundle; one of the most efficient ways to perform
    //tree-shaking: https://ahamedblogs.wordpress.com/2020/02/11/reducing-js-bundle-sizes-using-tree-shaking/
    // new BundleAnalyzerPlugin(),
    //HotModuleReplacementPlugin - avoid losing state after every change made to files.
    new Webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, devConfig);

