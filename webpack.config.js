const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';

  const config = {
    mode: IS_DEVELOPMENT ? 'development' : 'production',
    entry: './src/index.ts',
    output: {
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [{ loader: 'vue-loader' }, { loader: 'eslint-loader' }],
        },
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
        },
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true,
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1, // importするときに適用するloaderの数を設定、sassとpostcssを使っていた場合は「2」と設定する
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.vue'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
    devServer: {
      open: true,
      contentBase: path.join(__dirname, 'dist'),
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
    plugins: [new VueLoaderPlugin()],
  };

  if (IS_DEVELOPMENT) {
    config.devtool = 'eval-source-map';
  }

  return config;
};
