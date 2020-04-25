const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';

  return {
    entry: "./src/app.js",
    output: {
      filename: "app.bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        { test: /\.vue$/, use: [{loader: "vue-loader"}, {loader: "eslint-loader"}] },
        { test: /\.js$/, exclude: /node_modules/, use: [{loader: "babel-loader"}, {loader: "eslint-loader"}]},
        {
          test: /\.sass$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                indentedSyntax: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".vue"],
    },
    devtool: IS_DEVELOPMENT ? "source-map" : "none",
    devServer: {
      open: true,
      contentBase: path.join(__dirname, "dist"),
      watchContentBase: true,
      compress: true,
      port: 9000,
    },
    optimization: {
      minimizer: IS_DEVELOPMENT
        ? []
        : [
            new TerserPlugin({
              terserOptions: {
                compress: { drop_console: true },
              },
            }),
          ],
    },
    plugins: [new HtmlWebpackPlugin()],
  };
};
