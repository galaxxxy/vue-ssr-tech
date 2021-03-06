const path = require('path');
const webpack = require('webpack');
const ExtractPlugin = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');
const merge = require('webpack-merge');
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const isDev = process.env.NODE_ENV === 'development';

let config;
const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true,
  },
  historyApiFallback: {
    index: '/public/index.html'
  },
  hot: true,
};
const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"',
    },
  }),
  new HTMLPlugin({
    template: path.join(__dirname, './template.html'),
  }),
  new VueClientPlugin()
];
if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [{
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          'stylus-loader',
        ],
      }],
    },
    devServer,
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoEmitOnErrorsPlugin()
    ]),
  });
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/client-entry.js'),
      // vendor: ['vue'],
    },
    output: {
      filename: '[name].[chunkhash:8].js',
    },
    module: {
      rules: [{
        test: /\.styl/,
        use: ExtractPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            'stylus-loader',
          ],
        }),
      }],
    },
    plugins: defaultPlugins.concat([
      new ExtractPlugin('styles.[md5:contentHash:hex:8].css')
    ]),
    optimization: {
      splitChunks:{
        chunks: 'all',
      },
      runtimeChunk: true,
    },
  });
}

module.exports = config;
