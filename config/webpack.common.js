const path = require("path");
const srcDirectory = path.resolve(__dirname, "../src");
const publicDirectory = path.resolve(__dirname, "../public");
const buildDirectory = path.resolve(__dirname, "../build");
const Webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  entry: srcDirectory+"/index.tsx",
  resolve: {
    modules: [srcDirectory, 'node_modules'],
    extensions: [ ".ts", ".tsx", ".js", ".jsx", ".png" ]
  },
  output: {
    filename: "[name].bundle.js",
    path: buildDirectory,
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: srcDirectory,
        exclude: /node_modules/,
        use: [ "babel-loader" ]
      },
      {
        test: /\.html$/,
        include: srcDirectory,
        exclude: /node_modules/,
        use: "html-loader"
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif|woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: publicDirectory+"/index.html"
    }),
    new Webpack.ProgressPlugin()
  ]
};

module.exports = commonConfig;

//module federation