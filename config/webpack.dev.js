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
      "**/api/**": {
        target: "http://localhost:8080",
        secure: false
      }
    },
    historyApiFallback: true,
    // compress: true
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new Webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = merge(commonConfig, devConfig);

