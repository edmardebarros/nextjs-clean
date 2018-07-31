const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    withCSS,
    optimizedImages,
  ], {
    poweredByHeader: false,
    webpack: (config, options) => {
      const {dev, isServer} = options;

      config.module.rules.push(
        {
          test: /\.js$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitWarning: dev,
          },
        },
      )

      return config;
    },
  }
);
