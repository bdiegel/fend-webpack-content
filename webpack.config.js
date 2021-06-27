const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  // generates a new index html file in dist
  plugins: [
    new HtmlWebpackPlugin({
      template: "/src/client/views/index.html",
      filename: "./index.html",
    }),
  ],
};
